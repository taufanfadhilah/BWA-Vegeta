import Image from "next/legacy/image";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import { IconCart } from "@/components/icons";
import LogoBCA from "@/assets/images/logo-bca.png";

// utils
import { cn } from "@/lib/utils";
import { hover } from "@/lib/hover";

export default function Checkout() {
  return (
    <main className="flex flex-col w-full items-center pb-16 pt-5">
      <div className="w-content flex flex-col items-center">
        <div className="w-[776px] flex flex-col items-center">
          <div className="w-[658px] my-4 font-medium text-xl text-leaf text-center">
            Silahkan lakukan pembayaran dengan detail sebagai berikut
          </div>
          <div className="p-14 border rounded-xl w-[100%] flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <div className="w-[77px] h-[62px] relative">
                <Image src={LogoBCA} layout="fill" alt="" objectFit="contain" />
              </div>
              <div className="font-medium text-xl">Bank Central Asia</div>
            </div>
            <div className="flex flex-col gap-2">
              <div>No. Virtual Account</div>
              <div className="p-6 bg-gray-100 rounded-lg text-lg text-medium flex justify-between items-center">
                1234 • 1234 • 12345 • 12345
                <Button
                  className={cn(
                    "bg-white border border-leaf text-leaf",
                    hover.shadow
                  )}
                >
                  Salin
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Nominal Transfer</div>
              <div className="p-6 bg-gray-100 rounded-lg text-lg text-medium flex justify-between items-center">
                283.000
                <Button
                  className={cn(
                    "bg-white border border-leaf text-leaf",
                    hover.shadow
                  )}
                >
                  Salin
                </Button>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-medium mb-1">ID Transaksi</p>
              <p>#1056345676856793</p>
            </div>
            <div className="w-[100%] flex flex-col items-center">
              <div>Batas Pembayaran</div>
              <div className="text-4xl font-semibold my-4 text-red-400">
                16 : 48 : 07
              </div>
              <div className="text-lg">Minggu, 24 Juli 2022 - 11:41 WIB</div>

              <Link className="w-[100%] mt-16" href={"/product"}>
                <Button className={cn("w-[100%] h-12 bg-leaf", hover.shadow)}>
                  <IconCart className="w-6 h-6" />
                  <div className="ml-4 text-base">Lanjut berbelanja</div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
