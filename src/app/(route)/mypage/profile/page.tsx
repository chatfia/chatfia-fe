"use client";

import { useAuthStore } from "@/app/stores/useAuthStore";
import { useUserStore } from "@/app/stores/useUserStore";
import { useUserInfo } from "@/app/apis/hooks/useUserInfo";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TriangleAlert } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UpdateNicknameModal } from "@/app/features/mypage/UpdateNicknameModal";
import { UpdatePasswordModal } from "@/app/features/mypage/UpdatePasswordModal";
import DeleteAccount from "@/app/features/mypage/DeleteAccount";

export default function ProfilePage() {
  const { isSuccess } = useAuthStore();
  const { setUserInfo } = useUserStore();
  const { data, isLoading, isError } = useUserInfo();

  const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  useEffect(() => {
    if (isSuccess && data) {
      setUserInfo(data.nickname, data.email);
    }
  }, [isSuccess, data, setUserInfo]);

  const handleNicknameUpdate = (nickname: string) => {
    setUserInfo(nickname, data?.email || "");
  };

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
    <div className="flex flex-col items-center p-4 pt-16">
      <div className="w-full max-w-3xl rounded-xl border-2 border-red-400 bg-gray-50">
        <div className="flex flex-col items-center justify-between rounded-t-xl p-4">
          <h2 className="text-lg font-semibold text-zinc-900">내프로필</h2>
          <div className="flex items-center space-x-2 pt-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>ID</AvatarFallback>
            </Avatar>
            <div className="flex-col space-y-1 text-zinc-900">
              <p className="text-xl font-bold">{nickname}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 p-4">
          <span className="flex text-lg text-zinc-900">
            이메일 : &nbsp;{email}
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 p-4">
          <span className="flex text-lg text-zinc-900">
            닉네임 : &nbsp;{nickname}
          </span>
          <button
            className="rounded bg-gray-200 px-3 py-1 text-gray-800"
            onClick={() => setIsNicknameModalOpen(true)}
          >
            수정
          </button>
        </div>
        <div className="flex items-center justify-between rounded-b-xl border-t border-gray-200 p-4">
          <span className="text-lg text-zinc-900">비밀번호</span>
          <button
            className="rounded bg-gray-200 px-3 py-1 text-gray-800"
            onClick={() => setIsPasswordModalOpen(true)}
          >
            수정
          </button>
        </div>
      </div>
      <DeleteAccount />
      <UpdateNicknameModal
        isOpen={isNicknameModalOpen}
        onClose={() => setIsNicknameModalOpen(false)}
        currentNickname={data?.nickname || ""}
        onSuccess={handleNicknameUpdate}
      />
      <UpdatePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSuccess={() => console.log("비밀번호 변경 완료")}
        title="비밀번호 수정"
        newValueLabel="새 비밀번호"
        newValuePlaceholder="새 비밀번호를 입력하세요"
        confirmValueLabel="새 비밀번호 확인"
        confirmValuePlaceholder="새 비밀번호를 다시 입력하세요"
      />
    </div>
  );
}
