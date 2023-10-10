import Image from "next/legacy/image";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import SignUpForm from "./sign-up-form";

// assets
import LogoGoogle from "@/assets/images/logo-google.png";
import LogoFacebook from "@/assets/images/logo-facebook.png";

// utils
import { cn } from "@/lib/utils";
import { hover } from "@/lib/hover";

export default function SignUp() {
  return (
    <>
      <SignUpForm />
      <div className="flex flex-col w-[100%] gap-4 items-center">
        <div className="tracking-wider text-base text-gray-500">
          <div className="text-center h-9">atau</div>
          <Button
            className={cn(
              "bg-white border text-gray-600 font-light tracking-wider w-[275px]",
              hover.shadow
            )}
          >
            <div className="w-[24px] h-[24px] relative mr-3">
              <Image
                src={LogoGoogle}
                layout="fill"
                alt=""
                objectFit="contain"
              />
            </div>
            Daftar dengan Google
          </Button>
        </div>
        <Button
          className={cn(
            "bg-white border text-gray-500 font-light tracking-wider w-[275px]",
            hover.shadow
          )}
        >
          <div className="w-[24px] h-[24px] relative mr-3">
            <Image
              src={LogoFacebook}
              layout="fill"
              alt=""
              objectFit="contain"
            />
          </div>
          Daftar dengan Facebook
        </Button>
      </div>

      <div className="tracking-wider text-base text-gray-500 mt-12">
        Sudah memiliki akun?{" "}
        <Link href={"/auth/signin"}>
          <span className={cn("font-semibold text-river", hover.text)}>
            Masuk
          </span>
        </Link>
      </div>
    </>
  );
}
