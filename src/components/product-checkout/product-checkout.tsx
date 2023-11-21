"use client";
import { useState } from "react";
import Image from "next/legacy/image";

// components
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CommonStepper from "@/components/common/common-stepper";
import { ProductDetails } from "@/components/product/product-card";

// utils
import { formatNumber } from "@/lib/utils";

interface CheckoutProps {
  isChecked?: boolean;
  productDetails: ProductDetails;
  qty: number;
  onChangeItemCount: (count: number) => void;
  onDeleteItem: () => void;
}

const ProductCheckout: React.FC<CheckoutProps> = ({
  isChecked,
  productDetails,
  qty,
  onDeleteItem,
  onChangeItemCount,
}: CheckoutProps) => {
  const [itemCount, setItemCount] = useState(qty || 1);

  return (
    <>
      <div className="w-full">
        <div className="flex gap-6 items-center">
          <Checkbox
            className="w-6 h-6 border-2 border-leaf data-[state=checked]:bg-leaf data-[state=checked]:text-primary-foreground"
            id={"product-1"}
            checked={isChecked}
          />
          <div className="p-1 border rounded-lg">
            <div className="w-[80px] h-[80px] relative">
              <Image
                src={productDetails.img}
                layout="fill"
                alt=""
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2">
            <div>{productDetails.name}</div>
            <div className="font-semibold">
              Rp {formatNumber(productDetails.price)}
            </div>
          </div>
          <CommonStepper
            count={itemCount}
            onChange={(count) => {
              setItemCount(count);
              onChangeItemCount(count);
            }}
          />
          <Button
            className="text-red-400 border-0 bg-white font-regular"
            onClick={() => onDeleteItem()}
          >
            Hapus
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCheckout;
