"use client";
import { useState } from "react";

// components
import { IconHeart } from "@/components/icons";

// utils
import { cn } from "@/lib/utils";

interface IconProps {
  isFavorite: boolean;
}

const FavoriteButton: React.FC<IconProps> = ({ isFavorite }: IconProps) => {
  const [isHover, setIsHover] = useState(false);

  const isRedColored = isHover || isFavorite;
  const fillColor = cn({ white: !isRedColored, coral: isRedColored });
  const strokeColor = cn({ leaf: !isRedColored, coral: isRedColored });

  return (
    <div
      className="transition-all ease-in w-5 h-5"
      onMouseEnter={() => {
        if (!isHover) setIsHover(true);
      }}
      onMouseLeave={() => {
        if (isHover) setIsHover(false);
      }}
    >
      <IconHeart className="w-5 h-5" stroke={strokeColor} fill={fillColor} />
    </div>
  );
};

export default FavoriteButton;
