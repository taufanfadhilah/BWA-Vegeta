"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// components
import FilterCategory from "@/components/filter/filter-category";
import FilterPrice from "@/components/filter/filter-price";
import FilterRating from "@/components/filter/filter-rating";
import NoData from "./no-data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductShowcase } from "@/components/product/product-showcase";
import CommonPagination from "@/components/common/common-pagination";

// utils
import { cn } from "@/lib/utils";
import { hover } from "@/lib/hover";

// assets
import ProductsJSON from "@/assets/json/products.json";
import { useGetAllProductsQuery } from "@/services/product";
import { useRouter, useSearchParams } from "next/navigation";

export default function Products() {
  const isNoData = false;

  const router = useRouter();
  const searchParams = useSearchParams();

  const [activePage, setActivePage] = useState(
    parseInt(searchParams?.get("page") || "1") || 1
  );

  const { data, isLoading } = useGetAllProductsQuery({
    page: searchParams?.get("page") || undefined,
    category: searchParams.get("category") || undefined,
    min_price: searchParams.get("min_price") || undefined,
    max_price: searchParams.get("max_price") || undefined,
    rating: searchParams.get("rating") || undefined,
  });
  const { data: recommendationProducts, isLoading: recommendationisLoading } =
    useGetAllProductsQuery({});

  const handleChangeFilter = (key: string, value: string) => {
    const newQuery: Record<string, string> = {};
    searchParams.forEach((param, key) => {
      newQuery[key] = param;
    });
    newQuery[key] = value;

    const urlParams = new URLSearchParams(newQuery).toString();
    router.replace(`/product?${urlParams}`);
  };

  useEffect(() => {
    handleChangeFilter("page", activePage.toString());
  }, [activePage]);

  return (
    <main className="flex flex-col w-full min-h-screen items-center pb-8">
      <div className="w-content flex pt-5 gap-6">
        <div className="flex-[1] border border-gray-300 rounded-xl py-6 px-4 h-fit">
          <div className="text-2xl font-semibold">Filter</div>
          <div className="w-full separator my-4" />
          <FilterCategory
            value={searchParams.get("category")?.split(",")}
            onChange={(selectedCategories) =>
              handleChangeFilter("category", selectedCategories.join(","))
            }
          />
          <div className="w-full separator my-4" />
          <FilterPrice
            value={{
              min: searchParams?.get("min_price")
                ? parseInt(searchParams?.get("min_price") as string)
                : undefined,
              max: searchParams?.get("max_price")
                ? parseInt(searchParams?.get("max_price") as string)
                : undefined,
            }}
            onChange={(price) => {
              if (
                price.min !== parseInt(searchParams?.get("min_price") as string)
              ) {
                handleChangeFilter("min_price", `${price.min}`);
              } else {
                handleChangeFilter("max_price", `${price.max}`);
              }
            }}
          />
          <div className="w-full separator my-4" />
          <FilterRating
            value={
              searchParams.get("rating")
                ? searchParams.get("rating")?.split(",")
                : []
            }
            onChange={(selectedRating) =>
              handleChangeFilter("rating", selectedRating.join(","))
            }
          />
        </div>

        <div className="flex-[3]">
          {isNoData ? (
            <NoData />
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <div className="text-leaf text-3xl font-semibold">
                  Daftar Produk
                </div>
                <div className="flex items-center gap-2">
                  <div>Urut Berdasarkan</div>
                  <Select defaultValue={"harga-terendah"}>
                    <SelectTrigger
                      className={cn("w-[234px] bg-white", hover.shadow)}
                    >
                      <SelectValue placeholder="Urut Berdasarkan" />
                    </SelectTrigger>
                    <SelectContent className="w-[234px]">
                      <SelectGroup>
                        <SelectItem value="harga-terendah">
                          Harga Terendah
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <ProductShowcase
                gridConfig={"grid-cols-3"}
                products={data?.data?.data || []}
                isLoading={isLoading}
              />

              <div className="py-12">
                <CommonPagination
                  page={activePage}
                  total={data?.data.total ? Math.ceil(data?.data.total / 9) : 1}
                  onChange={(activePage) => setActivePage(activePage)}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-content separator my-6 mb-8" />

      <div className="w-content">
        <div className="flex justify-between mb-6 items-center">
          <div className="text-leaf text-3xl font-semibold">
            Kamu mungkin sukai
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
          products={recommendationProducts?.data?.data.slice(0, 4) || []}
          isLoading={recommendationisLoading}
        />
      </div>
    </main>
  );
}
