import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { QueryProvider } from "@/app/features/home/QueryProvider";
import type { Metadata } from "next";
import ConditionalHeader from "@/components/ConditionalHeader";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { Toaster } from "@/components/ui/toaster";

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
        <QueryProvider>
          <ConditionalHeader />
          {children}
          <Toaster />
          <ScrollToTopBtn />
        </QueryProvider>
      </body>
    </html>
  );
}
