"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  return (
    <form className="flex flex-col w-[100%] gap-4 items-center">
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2 text-center">
        Masuk akun anda
      </div>
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

      <Button
        className={cn("w-[320px] bg-leaf mt-6", hover.shadow)}
        onClick={() => {
          router.push("/");
        }}
      >
        Masuk
      </Button>
    </form>
  );
}

export default SignInForm;
