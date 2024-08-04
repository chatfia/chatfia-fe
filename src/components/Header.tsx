"use client";

import { useAuthStore } from "@/app/stores/useAuthStore";
import { useLogOut } from "@/app/apis/hooks/useLogOut";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useUserInfo } from "@/app/apis/hooks/useUserInfo";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DoorOpen } from "lucide-react";
import LogInBtn from "@/components/LogInBtn";
import { useUserStore } from "@/app/stores/useUserStore";
import { Skeleton } from "@/components/ui/skeleton";
import { TriangleAlert } from "lucide-react";

export default function Header() {
  const { isSuccess } = useAuthStore();
  const logOutMutation = useLogOut();
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const { setUserInfo } = useUserStore();

  const { data, isLoading, isError } = useUserInfo();

  // 로그아웃 성공/실패 시 알림 처리
  useEffect(() => {
    if (logOutMutation.isSuccess) {
      toast({
        title: "로그아웃이 완료되었습니다.",
        variant: "success",
        duration: 3000,
      });
      router.push("/");
    } else if (logOutMutation.isError) {
      toast({
        title: "로그아웃에 실패했습니다. 다시 시도해 주세요.",
        variant: "destructive",
        duration: 3000,
      });
    }
  }, [logOutMutation.isSuccess, logOutMutation.isError, router, toast]);

  useEffect(() => {
    if (isSuccess && data) {
      setUserInfo(data.nickname, data.email);
    }
  }, [isSuccess, data, setUserInfo]);

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleLogOutClick = () => {
    logOutMutation.mutate();
  };

  const isActiveLink = (link: string) => pathname === link;

  // 닉네임이 로딩 중이거나 에러가 발생했을 때의 처리
  let content;
  if (isLoading) {
    content = (
      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <Skeleton className="h-2 w-[100px] bg-gray-400" />
          <Skeleton className="h-2 w-[70px] bg-gray-400" />
        </div>
      </div>
    );
  } else if (isError || !isSuccess) {
    content = <TriangleAlert className="h-8 w-8 text-red-400" />;
  } else {
    content = <p>{data?.nickname} 님</p>;
  }

  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-zinc-800">
      <div className="flex items-center justify-between px-8 py-4">
        <div onClick={handleHomeClick} className="flex cursor-pointer gap-2">
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
        <div className="flex gap-20 text-xl">
          <Link
            href="/rule"
            className={
              isActiveLink("/rule")
                ? "text-red-400"
                : "transform cursor-pointer transition hover:scale-110"
            }
          >
            게임설명
          </Link>
          <Link
            href="/lobby"
            className={
              isActiveLink("/lobby")
                ? "text-red-400"
                : "transform cursor-pointer transition hover:scale-110"
            }
          >
            게임로비
          </Link>
          <Link
            href="/donation"
            className={
              isActiveLink("/donation")
                ? "text-red-400"
                : "transform cursor-pointer transition hover:scale-110"
            }
          >
            후원하기
          </Link>
        </div>
        {isSuccess ? (
          <div className="flex items-center gap-4">
            <Link href="/mypage">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>ID</AvatarFallback>
              </Avatar>
            </Link>
            {content}
            <button onClick={handleLogOutClick}>
              <DoorOpen className="h-8 w-8 text-white duration-300 hover:text-red-400" />
            </button>
          </div>
        ) : (
          <LogInBtn />
        )}
      </div>
    </header>
  );
}
