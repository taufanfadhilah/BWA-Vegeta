"use client";
import Link from "next/link";

// components
import { ProductCard } from "@/components/product/product-card";

// utils
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { Skeleton } from "../ui/skeleton";

interface ShowcaseProps {
  gridConfig?: string;
  products: Product[];
  isLoading?: boolean;
}

const ProductShowcase: React.FC<ShowcaseProps> = ({
  gridConfig,
  products,
  isLoading,
}: ShowcaseProps) => {
  const renderLoading = (
    <div className="grid grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((val) => (
        <div key={val}>
          <Skeleton className="w-[50%] h-16 rounded-md" />
          <Skeleton className="w-[75%] h-6 rounded-md mt-4" />
          <Skeleton className="w-[75%] h-6 rounded-md mt-2" />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="w-full">
        {isLoading ? (
          renderLoading
        ) : (
          <div className={cn("grid gap-6", gridConfig)}>
            {products?.map((product, index) => (
              <Link key={`productCard${index}`} href={`/product/detail/${product.id}`}>
                <ProductCard details={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export { ProductShowcase };
