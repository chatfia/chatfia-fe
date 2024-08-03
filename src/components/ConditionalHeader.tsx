"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isAuthOrMypage =
    pathname.startsWith("/auth") || pathname.startsWith("/mypage");

  return !isAuthOrMypage ? <Header /> : null;
}
