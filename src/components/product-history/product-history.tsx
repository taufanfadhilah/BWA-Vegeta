"use client";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";

// components
import { Button } from "@/components/ui/button";

// utils
import { cn, formatNumber } from "@/lib/utils";
import { hover } from "@/lib/hover";
import { Product } from "@prisma/client";
import { TransactionWithCheckout } from "@/services/transaction";

interface ProductHistoryProps {
  transaction: TransactionWithCheckout;
}

const ProductHistory: React.FC<ProductHistoryProps> = ({
  transaction,
}: ProductHistoryProps) => {
  const router = useRouter();
  const mainProduct = transaction?.Checkout[0];

  return (
    <>
      <div className="w-full">
        <div className="mt-6">
          <div className="border rounded-xl p-4 flex flex-col gap-4">
            <div className="flex gap-6">
              <div className="p-1 border rounded-xl overflow-hidden">
                <div className="w-[80px] h-[80px] relative">
                  <Image
                    src={mainProduct?.product?.img}
                    layout="fill"
                    alt=""
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <div className="text-lg font-semibold text-text-black">
                  {mainProduct?.product?.name}
                </div>
                <div className="text-sm text-text-black">
                  {mainProduct?.qty} x Rp{" "}
                  {formatNumber(mainProduct?.product?.price || 0)}
                </div>
                <div className="text-sm font-semibold text-text-black">
                  dan {transaction.Checkout?.length - 1} item lainnya
                </div>
              </div>
              <div className="flex w-auto">
                <div className="w-[226px] flex flex-col gap-2 border-r">
                  <div className="flex gap-4 items-baseline">
                    <div className="text-sm">
                      {new Date(transaction?.createdAt).toDateString()}
                    </div>
                    <div className="rounded-sm px-2 bg-leaf text-white text-xs font-semibold">
                      Berhasil
                    </div>
                  </div>
                  <div className="truncate">#{transaction.id}</div>
                </div>
                <div className="w-[172px] pl-[22px] pr-[13px] flex flex-col gap-1">
                  <div className="font-medium">Total Belanja</div>
                  <div className="font-semibold">Rp {formatNumber(transaction?.grandTotalPrice || 0)}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex-1 flex justify-end">
                <Button
                  className={cn("px-[19px] bg-white text-leaf", hover.text)}
                  onClick={() => {
                    router.push("/checkout");
                  }}
                >
                  Lihat Detail Transaksi
                </Button>
              </div>
              <div className="w-[172px] flex">
                <Button
                  className={cn("flex-1 ml-[9px] mr-4 bg-leaf", hover.shadow)}
                  onClick={() => {
                    router.push("/products");
                  }}
                >
                  Beli lagi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHistory;
