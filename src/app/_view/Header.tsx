"use client";

import { useAuthStore } from "@/app/stores/useAuthStore";
import { useLogOut } from "@/app/apis/hooks/useLogOut";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useUserInfo } from "@/app/apis/hooks/useUserInfo";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoIcon from "../../../public/icons/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogInButton from "@/app/_view/LogInButton";
import { useUserStore } from "@/app/stores/useUserStore";
import { Skeleton } from "@/components/ui/skeleton";
import { DoorOpen, Gamepad2, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

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

  const handleLogOutClick = () => {
    logOutMutation.mutate();
  };

  const isActiveLink = (link: string) => pathname === link;

  // 닉네임이 로딩 중이거나 에러가 발생했을 때의 처리
  const nickname = isLoading ? (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-2 w-[150px] bg-gray-400" />
        <Skeleton className="h-2 w-[100px] bg-gray-400" />
      </div>
    </div>
  ) : isError || !isSuccess ? (
    <TriangleAlert className="ml-2 h-8 w-8 text-red-400" />
  ) : (
    <p>{data?.nickname}</p>
  );

  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full justify-center bg-gray-900">
      <div className="flex items-center justify-center text-gray-50">
        <div className="flex items-center justify-center gap-20 text-xl">
          <Link
            href="/rule"
            className={cn(
              "transform transition",
              isActiveLink("/rule") ? "text-red-500" : "hover:scale-110",
            )}
          >
            게임설명
          </Link>
          <div className="group relative">
            <Link href="/">
              <Image
                src={logoIcon}
                alt="logo"
                height={56}
                className="no-user-select no-user-drag"
              />
            </Link>
            <Link
              href="/"
              className="absolute left-1/2 top-16 flex h-12 w-40 -translate-x-1/2 transform items-center justify-center gap-3 rounded-lg bg-red-600 text-2xl text-gray-50 opacity-0 transition-opacity duration-300 hover:bg-red-700 active:bg-red-800 group-hover:opacity-100"
            >
              <Gamepad2 size={30} />
              게임시작
            </Link>
          </div>
          <Link
            href="/donation"
            className={cn(
              "transform cursor-pointer transition",
              isActiveLink("/donation") ? "text-red-500" : "hover:scale-110",
            )}
          >
            후원하기
          </Link>
        </div>
        <div className="absolute ml-[62.5rem]">
          {isSuccess ? (
            <div className="flex items-center">
              <Link href="/mypage">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>ID</AvatarFallback>
                </Avatar>
              </Link>
              {nickname}님
              <button onClick={handleLogOutClick}>
                <DoorOpen className="h-8 w-8 text-white duration-300 hover:text-red-400" />
              </button>
            </div>
          ) : (
            <LogInButton />
          )}
        </div>
      </div>
    </header>
  );
}
