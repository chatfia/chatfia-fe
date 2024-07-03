import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import ConditionalHeader from "@/components/ConditionalHeader";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatfia | 챗피아",
  description: "Online Mafia Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} pt-20`}>
        <ConditionalHeader />
        {children}
        <ScrollToTopBtn />
      </body>
    </html>
  );
}
