"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogInBtn from "../app/features/home/LogInBtn";

export default function Header() {
  const [clickedLink, setClickedLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setClickedLink(link);
  };

  const handleHomeClick = () => {
    setClickedLink(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-zinc-800">
      <div className="flex items-center justify-between gap-2 px-8 py-4">
        <Link href="/" onClick={handleHomeClick}>
          <div className="flex cursor-pointer gap-2">
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="no-user-select no-user-drag"
            />
            <Image
              src="/imgs/chatfia.png"
              alt="chatfia"
              width={130}
              height={50}
              className="no-user-select no-user-drag"
            />
          </div>
        </Link>
        <div className="flex gap-20 text-xl">
          <Link
            href="/rule"
            className={
              clickedLink === "rule"
                ? "text-red-400"
                : "transition transform hover:scale-110 cursor-pointer"
            }
            onClick={() => handleLinkClick("rule")}
          >
            게임설명
          </Link>
          <Link
            href="/lobby"
            className={
              clickedLink === "lobby"
                ? "text-red-400"
                : "transition transform hover:scale-110 cursor-pointer"
            }
            onClick={() => handleLinkClick("lobby")}
          >
            게임로비
          </Link>
          <Link
            href="/donation"
            className={
              clickedLink === "donation"
                ? "text-red-400"
                : "transition transform hover:scale-110 cursor-pointer"
            }
            onClick={() => handleLinkClick("donation")}
          >
            후원하기
          </Link>
        </div>
        <LogInBtn />
      </div>
    </header>
  );
}
