"use client";

import { useAuthStore } from "@/app/stores/useAuthStore";
import { useUserStore } from "@/app/stores/useUserStore";
import { useUserInfo } from "@/app/apis/hooks/useUserInfo";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TriangleAlert } from "lucide-react";
import JobWinRates from "@/app/features/mypage/JobWinRates";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MyPage() {
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
          <Skeleton className="h-2 w-[100px] bg-gray-400" />
          <Skeleton className="h-2 w-[70px] bg-gray-400" />
        </div>
      </div>
    );
  } else if (isError || !isSuccess) {
    nickname = <TriangleAlert className="h-8 w-8 text-red-400" />;
  } else {
    nickname = <p>{data?.nickname}</p>;
  }

  // 이메일이 로딩 중이거나 에러가 발생했을 때의 처리
  let email;
  if (isLoading) {
    email = (
      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <Skeleton className="h-2 w-[100px] bg-gray-400" />
          <Skeleton className="h-2 w-[70px] bg-gray-400" />
        </div>
      </div>
    );
  } else if (isError || !isSuccess) {
    email = <TriangleAlert className="h-8 w-8 text-red-400" />;
  } else {
    email = <p>{data?.email}</p>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <JobWinRates />
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between rounded-t-xl bg-primary p-4 text-gray-50">
          <h2 className="text-lg font-semibold">내프로필</h2>
          <Link href="/mypage/profile" className="transform cursor-pointer">
            <ChevronRight />
          </Link>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-4">
          <span className="text-lg text-zinc-900">{nickname}</span>
          <button className="rounded bg-gray-200 px-3 py-1 text-gray-800">
            수정
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-4">
          <span className="text-lg text-zinc-900">{email}</span>
          <button className="rounded bg-gray-200 px-3 py-1 text-gray-800">
            수정
          </button>
        </div>
        <div className="flex items-center justify-between rounded-b-xl border-t border-gray-200 bg-gray-50 p-4">
          <span className="text-lg text-zinc-900">비밀번호</span>
          <button className="rounded bg-gray-200 px-3 py-1 text-gray-800">
            수정
          </button>
        </div>
      </div>
    </div>
  );
}
