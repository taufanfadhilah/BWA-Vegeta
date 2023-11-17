"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// components
import { Button } from "@/components/ui/button";
import { IconBag, IconCart, IconStar } from "@/components/icons";
import { ProductShowcase } from "@/components/product/product-showcase";
import CommonStepper from "@/components/common/common-stepper";

// utils
import { cn, formatNumber } from "@/lib/utils";
import { hover } from "@/lib/hover";

// assets
import ProductsJSON from "@/assets/json/products.json";
import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "@/services/product";
import { useCheckoutMutation } from "@/services/transaction";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export default function Products({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [itemCount, setItemCount] = useState(1);
  const { toast } = useToast();

  const { data: productDetails } = useGetProductByIdQuery(params.id);
  const { data: recommendedProducts } = useGetAllProductsQuery({});
  const [mutateCheckout] = useCheckoutMutation();

  const handleAddToCart = async () => {
    if (!session?.user) {
      toast({
        title: "Please sign in first",
        variant: "destructive",
      });
      router.push("/auth/signin");
      return;
    }
    const data = {
      product_id: params.id,
      qty: itemCount,
    };
    await mutateCheckout(data);
    router.push("/checkout");
  };

  return (
    <main className="flex flex-col w-full min-h-screen items-center pb-8">
      <div className="w-content flex pt-5 gap-12">
        <div className="border p-2 rounded-xl">
          <div className="w-[376px] h-[376px] relative">
            {productDetails?.data.img ? (
              <Image
                src={productDetails?.data.img}
                layout="fill"
                alt=""
                objectFit="contain"
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-leaf font-semibold">
            {productDetails?.data.category}
          </div>
          <div className="text-4xl font-semibold">
            {productDetails?.data.name}
          </div>
          <div className="flex gap-2">
            <IconStar className="w-5 h-5" stroke="carrot" fill="carrot" />
            <span>{productDetails?.data.rating}</span>
            <span>|</span>
            <span>{productDetails?.data.itemSold} terjual</span>
          </div>
          <div className="text-4xl font-semibold">
            Rp {formatNumber(productDetails?.data.price || 0)} / kg
          </div>
          <div className="text-gray-400">
            {productDetails?.data.description}
          </div>
          <div className="flex gap-4 items-center">
            <CommonStepper
              count={itemCount}
              onChange={(count) => setItemCount(count)}
            />
            <Button
              className={cn(
                "py-1 px-4 bg-leaf text-white leading-4",
                hover.shadow
              )}
              onClick={handleAddToCart}
            >
              <IconCart className="w-5 h-5 mr-2" />
              Masukkan Keranjang
            </Button>
            <Button
              className={cn(
                "py-1 px-4 bg-carrot text-white leading-4",
                hover.shadow
              )}
              onClick={handleAddToCart}
            >
              <IconBag className="w-5 h-5 mr-2" />
              Beli Sekarang
            </Button>
          </div>
        </div>
      </div>
      <div className="w-content separator my-6" />
      <div className="w-content">
        <div className="flex justify-between mb-6 items-center">
          <div className="text-leaf text-3xl font-semibold">
            Rekomendasi buat kamu
          </div>
          <Link
            href={"/product"}
            className="text-base p-0 h-auto bg-white text-neutral-600"
          >
            Lihat Selengkapnya {">"}
          </Link>
        </div>
        <ProductShowcase
          gridConfig={"grid-cols-4"}
          products={recommendedProducts?.data?.data.slice(0, 4) || []}
        />
      </div>
    </main>
  );
}
