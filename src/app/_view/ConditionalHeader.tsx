"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/_view/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isAuthOrMypage =
    pathname.startsWith("/auth") || pathname.startsWith("/mypage");

  return !isAuthOrMypage ? <Header /> : null;
}
