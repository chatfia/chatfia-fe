"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MyPageHeader() {
  const pathname = usePathname();

  const isActiveLink = (link: string) => pathname === link;

  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-primary">
      <div className="flex gap-20 text-xl">
        <Link href="/mypage/profile">
          <a
            className={
              isActiveLink("/mypage/profile")
                ? "text-black"
                : "transform cursor-pointer transition hover:scale-110"
            }
          >
            내 정보
          </a>
        </Link>
        <Link href="/mypage/edit-profile">
          <a
            className={
              isActiveLink("/mypage/edit-profile")
                ? "text-black"
                : "transform cursor-pointer transition hover:scale-110"
            }
          >
            회원정보 수정
          </a>
        </Link>
      </div>
    </header>
  );
}
