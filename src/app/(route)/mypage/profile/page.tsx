"use client";

import { useAuthStore } from "@/app/stores/useAuthStore";
import { useUserStore } from "@/app/stores/useUserStore";
import { useUserInfo } from "@/app/apis/hooks/useUserInfo";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TriangleAlert } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UpdateModal } from "@/app/features/mypage/UpdateModal";
import DeleteAccount from "@/app/features/mypage/DeleteAccount";

export default function ProfilePage() {
  const { isSuccess } = useAuthStore();
  const { setUserInfo } = useUserStore();
  const { data, isLoading, isError } = useUserInfo();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"nickname" | "password">(
    "nickname",
  );

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

  const openModal = (type: "nickname" | "password") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getModalProps = () => {
    if (modalType === "nickname") {
      return {
        title: "닉네임 수정",
        currentValueLabel: "현재 닉네임",
        currentValue: data?.nickname || "",
        newValueLabel: "변경할 닉네임 입력",
        newValuePlaceholder: "변경할 닉네임 입력",
        onConfirm: () => {
          // 닉네임 변경 API 추가
          console.log("닉네임 변경 완료");
          closeModal();
        },
        modalType: "nickname" as "nickname",
      };
    } else {
      return {
        title: "비밀번호 변경",
        newValueLabel: "새 비밀번호 입력",
        newValuePlaceholder: "새 비밀번호 입력",
        confirmValueLabel: "새 비밀번호 확인",
        confirmValuePlaceholder: "새 비밀번호 다시 입력",
        onConfirm: () => {
          // 비밀번호 변경 API 추가
          console.log("비밀번호 변경 완료");
          closeModal();
        },
        modalType: "password" as "password",
      };
    }
  };

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
            onClick={() => openModal("nickname")}
          >
            수정
          </button>
        </div>
        <div className="flex items-center justify-between rounded-b-xl border-t border-gray-200 p-4">
          <span className="text-lg text-zinc-900">비밀번호</span>
          <button
            className="rounded bg-gray-200 px-3 py-1 text-gray-800"
            onClick={() => openModal("password")}
          >
            수정
          </button>
        </div>
      </div>
      <DeleteAccount />
      <UpdateModal
        isOpen={isModalOpen}
        onClose={closeModal}
        {...getModalProps()}
      />
    </div>
  );
}
