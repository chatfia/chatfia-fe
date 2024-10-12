"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function MyPageHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    router.push("/");
  };

  const isActiveLink = (link: string) => pathname === link;

  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-zinc-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4">
        <div className="flex cursor-pointer gap-3">
          <Image
            src="/icons/logo.png"
            alt="logo"
            width={50}
            height={50}
            onClick={handleHomeClick}
          />
          <Link
            href="/mypage"
            className="flex transform cursor-pointer items-center text-2xl font-semibold"
          >
            마이페이지
          </Link>
        </div>
        <div className="flex gap-20 text-xl">
          <Link
            href="/mypage/profile"
            className={
              isActiveLink("/mypage/profile")
                ? "text-red-400"
                : "transform cursor-pointer transition hover:scale-110"
            }
          >
            내프로필
          </Link>
          <Link
            href="/mypage/job-win-rates"
            className={
              isActiveLink("/mypage/job-win-rates")
                ? "text-red-400"
                : "transform cursor-pointer transition hover:scale-110"
            }
          >
            직업별 승률
          </Link>
        </div>
      </div>
    </header>
  );
}
