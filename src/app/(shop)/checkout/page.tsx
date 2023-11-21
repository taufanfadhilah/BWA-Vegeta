"use client";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import DeliveryOptions from "@/components/product-checkout/delivery-options";
import ItemList from "./ItemList";

// utils
import { cn, formatNumber } from "@/lib/utils";
import { hover } from "@/lib/hover";
import { useCheckoutsQuery, usePaymentMutation } from "@/services/transaction";
import { useState } from "react";
import { DeliveryMethod } from "@/types/deliver-method";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [deliveryMethod, setDeliveryMethod] =
    useState<DeliveryMethod>("HOME_DELIVERY");

  const router = useRouter();
  const { toast } = useToast();
  const { data } = useCheckoutsQuery();
  const [mutatePayment] = usePaymentMutation();
  const products = data?.data || [];

  const totalPrice = products.reduce(
    (total, product) => total + product.pricePerItem * (product.qty || 1),
    0
  );
  const totalItem = products.reduce(
    (total, product) => total + (product.qty || 1),
    0
  );
  const applicationFee = 1000;
  const deliveryFee = deliveryMethod === "HOME_DELIVERY" ? 140000 : 0;
  const insurance = deliveryMethod === "HOME_DELIVERY" ? 2000 : 0;

  const subtotal = totalPrice + deliveryFee + insurance + applicationFee;

  const handlePayment = async () => {
    try {
      const data = {
        application_fee: applicationFee,
        asurance_fee: insurance,
        delivery_fee: deliveryFee,
        delivery_type: deliveryMethod,
      };

      await mutatePayment(data);

      toast({
        title: "Payment success!",
        description: "Your payment has been landed successfully",
        duration: 2000,
      });

      router.push("/history");
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <>
      <main className="flex flex-col w-full items-center pb-16 pt-5">
        <div className="w-content flex gap-8">
          <div className="flex-[2] flex flex-col gap-8">
            <ItemList products={products} />

            <div className="separator" />

            <DeliveryOptions
              value={deliveryMethod}
              onChange={setDeliveryMethod}
            />
          </div>

          <div className="flex-1 h-auto">
            <div className="flex flex-col gap-3 border p-3 rounded-xl ">
              <div className="text-lg font-semibold">Ringkasan Belanja</div>
              <div className="font-semibold">Total Belanja</div>
              <div className="flex justify-between">
                <div>Total Harga ({totalItem} barang)</div>
                <div>Rp {formatNumber(totalPrice)}</div>
              </div>

              {deliveryMethod === "HOME_DELIVERY" && (
                <>
                  <div className="flex justify-between">
                    <div>Total Ongkos Kirim</div>
                    <div>Rp {formatNumber(deliveryFee)}</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Asuransi Pengiriman</div>
                    <div>Rp {formatNumber(insurance)}</div>
                  </div>
                </>
              )}

              <div className="w-full separator" />
              <div className="font-semibold">Biaya Transaksi</div>
              <div className="flex justify-between">
                <div>Biaya Jasa Aplikasi</div>
                <div>Rp {formatNumber(applicationFee)}</div>
              </div>

              <div className="w-full separator" />
              <div className="flex justify-between">
                <div className="text-lg font-semibold">Total Tagihan</div>
                <div className="text-lg font-semibold">
                  Rp {formatNumber(subtotal)}
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <Button
                className={cn("w-[100%] mt-6 bg-leaf", hover.shadow)}
                onClick={handlePayment}
              >
                Lanjutkan Pembayaran
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
