"use client";

import { useAuthStore } from "@/app/stores/useAuthStore";
import { useUserStore } from "@/app/stores/useUserStore";
import { useUserInfo } from "@/app/apis/hooks/useUserInfo";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function UserProfile() {
  const { isSuccess } = useAuthStore();
  const { setUserInfo } = useUserStore();
  const { data, isLoading, isError } = useUserInfo();

  useEffect(() => {
    if (isSuccess && data) {
      setUserInfo(data.nickname, data.email);
    }
  }, [isSuccess, data, setUserInfo]);

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

  // 이메일이 로딩 중이거나 에러가 발생했을 때의 처리
  const email = isLoading ? (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-2 w-[250px] bg-gray-400" />
        <Skeleton className="h-2 w-[200px] bg-gray-400" />
      </div>
    </div>
  ) : isError || !isSuccess ? (
    <TriangleAlert className="ml-2 h-8 w-8 text-red-400" />
  ) : (
    <p>{data?.email}</p>
  );

  return (
    <div className="w-full max-w-3xl">
      <div className="flex items-center justify-between rounded-t-xl bg-primary p-4 text-gray-50">
        <h2 className="text-lg font-semibold">내프로필</h2>
        <Link href="/mypage/profile" className="transform cursor-pointer">
          <ChevronRight />
        </Link>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-4">
        <span className="flex text-lg text-zinc-900">
          이메일 : &nbsp;{email}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-4">
        <span className="flex text-lg text-zinc-900">
          닉네임 : &nbsp;{nickname}
        </span>
      </div>
      <div className="flex items-center justify-between rounded-b-xl border-t border-gray-200 bg-gray-50 p-4">
        <span className="text-lg text-zinc-900">비밀번호</span>
      </div>
    </div>
  );
}
