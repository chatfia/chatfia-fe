"use client";

import { navigationStore } from "@/app/stores/navigationStore";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { useLogOut } from "@/app/hooks/useLogOut";
import Link from "next/link";
import Image from "next/image";
import { CircleUserRound, DoorOpen } from "lucide-react";
import LogInBtn from "@/components/LogInBtn";

export default function Header() {
  const { clickedLink, setClickedLink } = navigationStore();
  const { isLoggedIn } = useAuthStore();
  const logOutMutation = useLogOut();

  const handleLinkClick = (link: string) => {
    setClickedLink(link);
  };

  const handleHomeClick = () => {
    setClickedLink(null);
  };

  const handleLogInClick = () => {
    setClickedLink(null);
  };

  const handleLogOutClick = () => {
    logOutMutation.mutate();
  };

  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-zinc-800">
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
                : "transform cursor-pointer transition hover:scale-110"
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
                : "transform cursor-pointer transition hover:scale-110"
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
                : "transform cursor-pointer transition hover:scale-110"
            }
            onClick={() => handleLinkClick("donation")}
          >
            후원하기
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link href="/mypage">
              <CircleUserRound className="h-8 w-8 cursor-pointer text-white duration-300 hover:text-red-400" />
            </Link>
            <button onClick={handleLogOutClick}>
              <DoorOpen className="h-8 w-8 text-white duration-300 hover:text-red-400" />
            </button>
          </div>
        ) : (
          <LogInBtn onClick={handleLogInClick} />
        )}
      </div>
    </header>
  );
}
