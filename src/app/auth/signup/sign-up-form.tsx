"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  return (
    <form className="flex flex-col w-[100%] gap-4 items-center">
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2 text-center">
        Buat akun baru
      </div>
      <Input
        className="w-[100%] p-4 rounded-sm"
        type="text"
        placeholder="Nama Lengkap"
      />
      <Input
        className="w-[100%] p-4 rounded-sm"
        type="text"
        placeholder="Email"
      />

      <div className="w-[100%] relative">
        <Input
          className="w-[100%] p-4 rounded-sm"
          type={showPassword ? "text" : "password"}
          placeholder="Kata Sandi"
          suffix="Eye"
          onPressSuffix={() => setShowPassword(!showPassword)}
        />
      </div>
      <div className="w-[100%] relative">
        <Input
          className="w-[100%] p-4 rounded-sm"
          type={showConfirmationPassword ? "text" : "password"}
          placeholder="Konfirmasi Kata Sandi"
          suffix="Eye"
          onPressSuffix={() =>
            setShowConfirmationPassword(!showConfirmationPassword)
          }
        />
      </div>

      <Button className={cn("w-[320px] bg-leaf mt-6", hover.shadow)}>
        Buat Akun
      </Button>
    </form>
  );
}

export default SignUpForm;
