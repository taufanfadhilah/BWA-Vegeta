// components
import { CommonHeader } from "@/components/common/common-header";
import { CommonFooter } from "@/components/common/common-footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CommonHeader />
      {children}
      <CommonFooter />
    </>
  );
}
