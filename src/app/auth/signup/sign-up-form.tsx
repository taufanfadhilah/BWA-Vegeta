"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type UserAuthForm = {
  email: string;
  password: string;
  name: string;
  confirm_password: string | undefined;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    name: yup.string().required(),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Password must match!"),
  })
  .required();

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserAuthForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserAuthForm) => {
    console.log("🚀 ~ file: sign-up-form.tsx:27 ~ onSubmit ~ data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[100%]">
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2 text-center">
        Buat akun baru
      </div>
      <Input
        className="w-[100%] p-4 rounded-sm mt-4"
        type="text"
        placeholder="Nama Lengkap"
        {...register("name")}
        error={errors.name?.message}
      />
      <Input
        className="w-[100%] p-4 rounded-sm mt-4"
        type="text"
        placeholder="Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        className="w-[100%] p-4 rounded-sm mt-4"
        type={showPassword ? "text" : "password"}
        placeholder="Kata Sandi"
        suffix="Eye"
        onPressSuffix={() => setShowPassword(!showPassword)}
        {...register("password")}
        error={errors.password?.message}
      />

      <Input
        className="w-[100%] p-4 rounded-sm mt-4"
        type={showConfirmationPassword ? "text" : "password"}
        placeholder="Konfirmasi Kata Sandi"
        suffix="Eye"
        onPressSuffix={() =>
          setShowConfirmationPassword(!showConfirmationPassword)
        }
        {...register("confirm_password")}
        error={errors.confirm_password?.message}
      />

      <Button
        type="submit"
        className={cn("w-[320px] bg-leaf mt-6 mx-auto", hover.shadow)}
      >
        Buat Akun
      </Button>
    </form>
  );
}

export default SignUpForm;
