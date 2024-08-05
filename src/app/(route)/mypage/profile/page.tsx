"use client";

import { useAuthStore } from "@/app/stores/useAuthStore";
import { useUserStore } from "@/app/stores/useUserStore";
import { useUserInfo } from "@/app/apis/hooks/useUserInfo";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TriangleAlert } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ChevronRight } from "lucide-react";

export default function ProfilePage() {
  const { isSuccess } = useAuthStore();
  const { setUserInfo } = useUserStore();
  const { data, isLoading, isError } = useUserInfo();

  useEffect(() => {
    if (isSuccess && data) {
      setUserInfo(data.nickname, data.email);
    }
  }, [isSuccess, data, setUserInfo]);

  // 닉네임이 로딩 중이거나 에러가 발생했을 때의 처리
  let nickname;
  if (isLoading) {
    nickname = (
      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <Skeleton className="h-2 w-[150px] bg-gray-400" />
          <Skeleton className="h-2 w-[100px] bg-gray-400" />
        </div>
      </div>
    );
  } else if (isError || !isSuccess) {
    nickname = <TriangleAlert className="ml-2 h-8 w-8 text-red-400" />;
  } else {
    nickname = <p>{data?.nickname}</p>;
  }

  // 이메일이 로딩 중이거나 에러가 발생했을 때의 처리
  let email;
  if (isLoading) {
    email = (
      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <Skeleton className="h-2 w-[250px] bg-gray-400" />
          <Skeleton className="h-2 w-[200px] bg-gray-400" />
        </div>
      </div>
    );
  } else if (isError || !isSuccess) {
    email = <TriangleAlert className="ml-2 h-8 w-8 text-red-400" />;
  } else {
    email = <p>{data?.email}</p>;
  }

  return (
    <div className="flex flex-col items-center p-4 pt-16">
      <div className="w-full max-w-3xl rounded-xl border-2 border-red-400 bg-gray-50">
        <div className="flex flex-col items-center justify-between rounded-t-xl p-4">
          <h2 className="text-lg font-semibold text-zinc-900">내프로필</h2>
          <div className="flex items-center space-x-2 pt-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>ID</AvatarFallback>
            </Avatar>
            <div className="flex-col space-y-2">
              <p className="text-xl font-bold">{nickname}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 p-4">
          <span className="flex text-lg text-zinc-900">
            닉네임 : &nbsp;{nickname}
          </span>
          <button className="rounded bg-gray-200 px-3 py-1 text-gray-800">
            수정
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 p-4">
          <span className="flex text-lg text-zinc-900">
            이메일 : &nbsp;{email}
          </span>
          <button className="rounded bg-gray-200 px-3 py-1 text-gray-800">
            수정
          </button>
        </div>
        <div className="flex items-center justify-between rounded-b-xl border-t border-gray-200 p-4">
          <span className="text-lg text-zinc-900">비밀번호</span>
          <button className="rounded bg-gray-200 px-3 py-1 text-gray-800">
            수정
          </button>
        </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="flex w-full max-w-3xl transform cursor-pointer items-center justify-start p-4 text-gray-400">
            <p>회원탈퇴</p>
            <ChevronRight />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말로 탈퇴하시겠어요?</AlertDialogTitle>
            <AlertDialogDescription>
              회원 탈퇴 시 쿠폰, 포인트는 소멸되며, 계정 정보는 복구가
              불가능합니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>계속 사용하기</AlertDialogCancel>
            <AlertDialogAction>네 탈퇴할게요</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
