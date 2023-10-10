import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// components
import { Toaster } from "@/components/ui/toaster";

// utils
import { cn } from "@/lib/utils";

// styles
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vegeta",
  description: "Vegeta",
  applicationName: "Vegeta",
  authors: {
    name: "Taufan Fadhilah",
    url: "https://taufanfadhilah.web.id/",
  },
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "text-neutral-600")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
