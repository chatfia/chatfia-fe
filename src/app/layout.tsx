import "./globals.css";
import { Jua } from "next/font/google";
import { QueryProvider } from "@/app/features/home/QueryProvider";
import type { Metadata } from "next";
import ConditionalHeader from "@/app/_view/ConditionalHeader";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { Toaster } from "@/components/ui/toaster";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={`${jua.className} pt-20`}>
        <QueryProvider>
          <ConditionalHeader />
          {children}
          <ScrollToTopBtn />
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
