import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import DeliveryOptions from "@/components/product-checkout/delivery-options";
import ItemList from "./ItemList";

// utils
import { cn, formatNumber } from "@/lib/utils";
import { hover } from "@/lib/hover";

export default function Checkout() {
  const deliveryMethod = "HOME_DELIVERY";
  const products = [
    {
      img: "/vegetables.jpeg",
      price: 40000,
      rating: 4.9,
      sold: 40,
      name: "Kembang Kol",
      unit: "kg",
      itemCount: 1,
    },
    {
      img: "/vegetables.jpeg",
      price: 25000,
      rating: 4.9,
      sold: 40,
      name: "Kentang Gondangdia",
      unit: "kg",
      itemCount: 2,
    },
  ];

  const totalPrice = products.reduce(
    (total, product) => total + product.price * (product.itemCount || 1),
    0
  );
  const totalItem = products.reduce(
    (total, product) => total + (product.itemCount || 1),
    0
  );
  const applicationFee = 1000;
  const deliveryFee = deliveryMethod === "HOME_DELIVERY" ? 140000 : 0;
  const insurance = deliveryMethod === "HOME_DELIVERY" ? 2000 : 0;

  const subtotal = totalPrice + deliveryFee + insurance + applicationFee;

  return (
    <>
      <main className="flex flex-col w-full items-center pb-16 pt-5">
        <div className="w-content flex gap-8">
          <div className="flex-[2] flex flex-col gap-8">
            <ItemList />

            <div className="separator" />

            <DeliveryOptions />
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
              <Link className="w-[100%]" href={"/payment"}>
                <Button className={cn("w-[100%] mt-6 bg-leaf", hover.shadow)}>
                  Lanjutkan Pembayaran
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
