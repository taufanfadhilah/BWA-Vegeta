"use client";
import Image from "next/legacy/image";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  IconBell,
  IconCart,
  IconHeart,
  IconMessage,
  IconSettings,
} from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LogoVegeta } from "@/components/icons";
import CommonNotificationBadge from "@/components/common/common-notification-badge";

// utils
import { cn } from "@/lib/utils";
import { hover } from "@/lib/hover";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

interface HeaderProps {}

const CommonHeader: React.FC<HeaderProps> = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="w-extra flex flex-col items-center">
        <div className="flex w-content py-4 items-center">
          <Link href="/">
            <LogoVegeta className="w-[124px] h-[28px]" />
          </Link>

          <div className="flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-normal"
                      )}
                    >
                      Beranda
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-normal"
                      )}
                    >
                      Tentang Kami
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/product" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-normal"
                      )}
                    >
                      Produk
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-normal"
                      )}
                    >
                      Belanja
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {session?.user ? (
            <div className="flex gap-4 items-center">
              <CommonNotificationBadge
                notificationDetail={{ color: "bg-leaf", count: 2 }}
              >
                <IconMessage
                  className={cn("w-6 h-6", hover.shadow)}
                  stroke="text-black"
                />
              </CommonNotificationBadge>

              <CommonNotificationBadge
                notificationDetail={{ color: "bg-coral", count: 12 }}
              >
                <IconBell
                  className={cn("w-6 h-6", hover.shadow)}
                  stroke="text-black"
                />
              </CommonNotificationBadge>
              <div className="w-[42px] h-[42px] rounded-full relative overflow-hidden">
                <Image
                  src={`https://ui-avatars.com/api/?name=${session.user.name}&background=random`}
                  layout="fill"
                  alt=""
                  objectFit="cover"
                />
              </div>

              <div className="flex flex-col w-[127px] justify-center">
                <div className="text-xs">Hi, Apa Kabar?</div>
                <div className="text-sm font-semibold">{session.user.name}</div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IconSettings
                    className={cn("w-6 h-6 cursor-pointer", hover.shadow)}
                    stroke="text-black"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/history">History Transactions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      signOut({
                        callbackUrl: "/auth/signin",
                      })
                    }
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex gap-6">
              <Link href="/auth/signup">
                <Button
                  className={cn("py-1 px-7 bg-leaf leading-4", hover.shadow)}
                >
                  Daftar Sekarang
                </Button>
              </Link>
              <Link href="/auth/signin">
                <Button
                  className={cn("py-1 px-7 bg-carrot leading-4", hover.shadow)}
                >
                  Masuk akun
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="w-extra separator" />
        <div className="flex w-content py-3 justify-between items-center">
          <div className="flex">
            <Select defaultValue={"semua-kategori"}>
              <SelectTrigger
                className={cn(
                  "w-[180px] rounded-tr-none rounded-br-none bg-white",
                  hover.shadow
                )}
              >
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent className="w-[180px]">
                <SelectGroup>
                  <SelectItem value="semua-kategori">Semua Kategori</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="relative">
              <Input
                className="w-[288px] rounded-tl-none rounded-bl-none"
                type="text"
                placeholder="Pencarian ..."
                suffix="Magnifier"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              href={"/product"}
              className={cn(
                "flex items-center text-neutral-600 font-regular p-0",
                hover.shadow
              )}
            >
              <CommonNotificationBadge
                notificationDetail={{ color: "bg-carrot" }}
              >
                <IconHeart className="w-5 h-5" stroke="leaf" />
              </CommonNotificationBadge>
              <span className="pl-2">Favorit</span>
            </Link>
            <Link
              href={"/checkout"}
              className={cn(
                "flex items-center text-neutral-600 font-regular p-0",
                hover.shadow
              )}
            >
              <CommonNotificationBadge
                notificationDetail={{ color: "bg-carrot" }}
              >
                <IconCart className="w-5 h-5" stroke="leaf" />
              </CommonNotificationBadge>
              <span className="pl-2">Keranjang</span>
            </Link>
          </div>
        </div>
        <div className="w-extra separator" />
      </div>
    </>
  );
};

export { CommonHeader };
