"use client";
import Image from "next/legacy/image";
import Link from "next/link";

// components
import ProductCategory from "@/components/product/product-category";
import { ProductShowcase } from "@/components/product/product-showcase";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// assets
import ProductCategoryJSON from "@/assets/json/product-category.json";
import ProductsJSON from "@/assets/json/products.json";
import ImageBanner from "@/assets/images/image-banner.png";

// services
import { useGetAllProductsQuery } from "@/services/product";

export default function Home() {
  const { data, isLoading } = useGetAllProductsQuery({});

  return (
    <main className="flex flex-col w-full min-h-screen items-center pb-8">
      <div className="w-content">
        <div className="py-8 flex justify-center">
          <div className="w-content relative image-banner">
            <AspectRatio ratio={936 / 294}>
              <Image src={ImageBanner} layout="fill" alt="" objectFit="cover" />
            </AspectRatio>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between mb-6">
            <div className="text-leaf text-3xl font-semibold">
              Produk Unggulan
            </div>
            <Link
              href="/product"
              className="text-base p-0 h-auto bg-white text-neutral-600"
            >
              Lihat Selengkapnya {">"}
            </Link>
          </div>
          <ProductShowcase
            gridConfig={"grid-cols-4"}
            products={data?.data?.slice(0, 4) || []}
            isLoading={isLoading}
          />
        </div>

        <div className="mt-8">
          <div className="text-leaf text-3xl font-semibold">
            Produk berdasarkan kategori
          </div>

          <div className="mt-4 grid grid-cols-3 gap-6">
            {ProductCategoryJSON.map((category) => (
              <ProductCategory
                key={`productCategory${category.id}`}
                id={category.id}
                title={category.title}
                icon={category.icon}
                color={category.color}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="text-leaf text-3xl font-semibold">Tentang Kami</div>
          <div className="flex flex-col mt-6 gap-8 text-gray-400">
            <p>
              Selamat datang di Vegeta, destinasi terbaik untuk aneka sayuran
              dan buah segar siap kirim ke seluruh Indonesia! Kami dengan bangga
              mempersembahkan diri sebagai tim yang berdedikasi untuk memberikan
              kualitas terbaik dan pilihan yang beragam untuk kebutuhan sayuran
              dan buah segar Anda.
            </p>
            <p>
              Kami berusaha untuk selalu memberikan pelayanan terbaik kepada
              pelanggan kami. Tim kami selalu siap membantu Anda dalam memilih
              aneka sayuran dan buah yang sesuai dengan kebutuhan dan preferensi
              Anda. Dengan sistem pengiriman yang efisien, produk-produk segar
              dari Vegeta akan tiba di depan pintu Anda dalam kondisi prima,
              siap untuk melengkapi hidangan sehat dan lezat Anda.
            </p>
            <p>
              Terima kasih atas kepercayaan Anda pada kami. Kami berharap Anda
              menikmati pengalaman berbelanja di situs kami dan menemukan
              produk-produk berkualitas tinggi yang akan melengkapi kehidupan
              sehat dan bahagia Anda. Jangan ragu untuk menghubungi tim kami
              jika Anda memerlukan bantuan atau memiliki pertanyaan. Bersama,
              mari kita jaga kesehatan dan kelezatan hidup dengan produk-produk
              berkualitas dari kami.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
