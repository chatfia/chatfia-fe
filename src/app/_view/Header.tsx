"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoIcon from "../../../public/icons/logo.png";
import { DoorOpen, Gamepad2, LogIn, TriangleAlert } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { useLogOut } from "@/app/apis/hooks/useLogOut";
import { useToast } from "@/components/ui/use-toast";
import { useUserInfo } from "@/app/apis/hooks/useUserInfo";
import { useUserStore } from "@/app/stores/useUserStore";

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
    <header className="fixed left-0 top-0 z-10 flex h-20 w-full justify-center bg-gray-900">
      <div className="flex items-center justify-center text-gray-50">
        <div className="flex items-center justify-center gap-20 text-2xl">
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
              <Image src={logoIcon} alt="logo" height={60} />
            </Link>
            <Link href="/">
              <Button variant="start" size="start">
                <Gamepad2 size={30} />
                게임시작
              </Button>
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
            <Link href="/auth">
              <Button variant="bounce" size="bounce">
                로그인
                <LogIn size={20} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
