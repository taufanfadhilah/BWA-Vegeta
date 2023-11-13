"use client";
import { useState } from "react";
import Image from "next/legacy/image";

// components
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { IconCart, IconStar } from "@/components/icons";
import FavoriteButton from "@/components/common/buttons/favorite-button";

// utils
import { cn, formatNumber } from "@/lib/utils";
import { Product } from "@prisma/client";

interface CardProps {
  details: Product;
  className?: string;
}

const ProductCard: React.FC<CardProps> = ({
  details,
  className,
}: CardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <>
      <div
        className={cn(
          "w-full flex flex-col gap-2 p-4 border border-gray rounded-xl hover:transition-all hover:ease-in hover:duration-200 hover:drop-shadow-lg bg-white relative",
          className
        )}
      >
        <div
          className="absolute top-4 right-4 z-10 hover:drop-shadow-lg"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <FavoriteButton isFavorite={isFavorite} />
        </div>

        <div className="w-full relative">
          <AspectRatio ratio={1 / 1}>
            <Image src={details.img} layout="fill" alt="" objectFit="contain" />
          </AspectRatio>
        </div>
        <div className="text-leaf text-xl font-medium">{details.name}</div>
        <div className="font-semibold">
          Rp {formatNumber(details.price)} / kg
        </div>
        <div className="flex gap-2">
          <IconStar className="w-5 h-5" fill="carrot" stroke="carrot" />
          <span>{details.rating}</span>
          <span>|</span>
          <span>{details.itemSold} terjual</span>
        </div>
        <Button
          className="py-1 px-7 bg-leaf hover:transition-all hover:ease-in hover:duration-200 hover:opacity-80 leading-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <IconCart className="w-[18px] h-[18px] mr-2" stroke="background" />
          Masukkan Keranjang
        </Button>
      </div>
    </>
  );
};

export { ProductCard };
