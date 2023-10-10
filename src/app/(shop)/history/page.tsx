"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

// components
import { ProductShowcase } from "@/components/product/product-showcase";
import { ProductDetails } from "@/components/product/product-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductHistory from "@/components/product-history/product-history";
import CommonPagination from "@/components/common/common-pagination";

// utils
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";

// assets
import GoldBadge from "@/assets/images/badge-gold.png";
import ProductsJSON from "@/assets/json/products.json";

export default function History() {
  const [transactions] = useState([
    {
      products: ProductsJSON,
    },
    {
      products: ProductsJSON,
    },
  ]);
  const [recommendedProducts] = useState<ProductDetails[]>(ProductsJSON);
  const [activePage, setActivePage] = useState(1);
  const [totalPage] = useState(5);

  return (
    <main className="flex flex-col w-full min-h-screen items-center pb-8">
      <div className="w-content flex gap-6">
        <div className="m-5 p-5 flex flex-col flex-[1] border rounded-xl items-center gap-2 ">
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-[71px] h-[71px] rounded-[20px] relative overflow-hidden">
              <Image
                src="https://ui-avatars.com/api/?name=Taufan+Fadhilah&background=random"
                layout="fill"
                alt=""
                objectFit="cover"
              />
            </div>
          </div>
          <div className="font-semibold">Taufan Fadhilah</div>
          <div className="flex items-center justify-center">
            <div className="w-[14px] h-[20px] relative mr-2">
              <Image src={GoldBadge} layout="fill" alt="" objectFit="cover" />
            </div>
            <span>Member Gold</span>
          </div>
          <div className="w-[100%] separator mt-3" />
          <div className="w-[100%] gap-3 flex flex-col">
            <div className="mt-6">
              <div>Transaksi bulan ini</div>
              <div className="text-[20px] font-bold">120 x</div>
            </div>
            <div className="">
              <div>Belanja bulan ini</div>
              <div className="text-[20px] font-bold text-leaf">
                Rp 1.300.000
              </div>
            </div>
            <div className="mt-3">
              <div>Saldo saat ini</div>
              <div className="text-[20px] font-bold text-carrot">
                Rp 300.000
              </div>
            </div>
          </div>
          <div className="w-[100%] separator mt-6 mb-3" />
        </div>
        <div className="m-5 flex-[3]">
          <div className="flex justify-between">
            <div className="text-leaf text-3xl font-semibold">
              Riwayat Belanja
            </div>
            <div className="flex items-center gap-2">
              <div>Urut Berdasarkan</div>
              <Select defaultValue={"transaksi-terbaru"}>
                <SelectTrigger
                  className={cn("w-[234px] bg-white", hover.shadow)}
                >
                  <SelectValue placeholder="Urut Berdasarkan" />
                </SelectTrigger>
                <SelectContent className="w-[234px]">
                  <SelectGroup>
                    <SelectItem value="transaksi-terbaru">
                      Transaksi terbaru
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {transactions.map((transaction, index) => (
            <ProductHistory
              key={`productHistory${index}`}
              products={transaction.products}
            />
          ))}

          <div className="pt-4">
            <CommonPagination
              page={activePage}
              total={totalPage}
              onChange={(activePage) => setActivePage(activePage)}
            />
          </div>
        </div>
      </div>

      <div className=" w-content px-5">
        <div className="separator my-8" />
      </div>
      <div className="flex flex-col w-content px-5">
        <div className="flex justify-between mb-6">
          <div className="text-leaf text-3xl font-semibold">
            Rekomendasi buat kamu
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
          products={recommendedProducts}
        />
      </div>
    </main>
  );
}
