"use client";
import { useState } from "react";

//components
import { IconCheckCircle } from "../icons";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// utils
import { cn } from "@/lib/utils";
import { hover } from "@/lib/hover";

export type DeliveryMethod = "HOME_DELIVERY" | "STORE_PICKUP";

const DeliveryOptions: React.FC<{}> = () => {
  const [deliveryMethod, setDeliveryMethod] =
    useState<DeliveryMethod>("HOME_DELIVERY");

  return (
    <>
      <div className="text-lg font-semibold">Pilihan Pengiriman</div>
      <div className="flex gap-6">
        <div
          className={cn(
            "p-4 flex-1 border rounded-md flex flex-col gap-2 relative cursor-pointer bg-white",
            deliveryMethod === "HOME_DELIVERY" ? "border-leaf" : "",
            hover.shadow
          )}
          onClick={() => setDeliveryMethod("HOME_DELIVERY")}
        >
          <div>Home Delivery</div>
          <div className="text-sm text-gray-400">
            Akan tiba maksimal pukul 17.00 WIB
          </div>
          {deliveryMethod === "HOME_DELIVERY" && (
            <div className="absolute top-4 right-4">
              <IconCheckCircle className="w-5 h-5" stroke="leaf" />
            </div>
          )}
        </div>
        <div
          className={cn(
            "p-4 flex-1 border rounded-md flex flex-col gap-2 relative cursor-pointer bg-white",
            deliveryMethod === "STORE_PICKUP" ? "border-leaf" : "",
            hover.shadow
          )}
          onClick={() => setDeliveryMethod("STORE_PICKUP")}
        >
          <div>Ambil di toko</div>
          <div className="text-sm text-gray-400">
            Ambil pesanan anda secara mandiri di store
          </div>
          {deliveryMethod === "STORE_PICKUP" && (
            <div className="absolute top-4 right-4">
              <IconCheckCircle className="w-5 h-5" stroke="leaf" />
            </div>
          )}
        </div>
      </div>

      {deliveryMethod === "HOME_DELIVERY" && (
        <>
          <div className="text-lg font-semibold">Alamat Pengiriman</div>
          <div className="w-full flex flex-col gap-4">
            <Input
              className="w-full p-4"
              type="text"
              placeholder="Nama Lengkap"
            />
            <Input
              className="w-full p-4"
              type="text"
              placeholder="Nomor Telepon"
            />
            <Textarea placeholder="Alamat Lengkap" />
            <div className="flex w-full gap-4">
              <Input
                className="flex-1 p-4"
                type="text"
                placeholder="Provinsi"
              />
              <Input
                className="flex-1 p-4"
                type="text"
                placeholder="Kota/Kabupaten"
              />
            </div>
            <div className="flex w-full gap-4">
              <Input
                className="flex-1 p-4"
                type="text"
                placeholder="Kecamatan"
              />
              <Input className="flex-1 p-4" type="text" placeholder="Kodepos" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeliveryOptions;
