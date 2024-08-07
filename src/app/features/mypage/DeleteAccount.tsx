"use client";

import { useToast } from "@/components/ui/use-toast";
import { useDeleteAccount } from "@/app/apis/hooks/useDeleteAccount";
import { useEffect } from "react";
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

export default function DeleteAccount() {
  const { toast } = useToast();
  const deleteAccountMutation = useDeleteAccount();

  useEffect(() => {
    if (deleteAccountMutation.isSuccess) {
      toast({
        title: "회원탈퇴가 성공적으로 완료되었습니다.",
        variant: "success",
        duration: 3000,
      });
    } else if (deleteAccountMutation.isError) {
      toast({
        title: "회원탈퇴에 실패했습니다.",
        description: "다시 시도해 주세요.",
        variant: "destructive",
        duration: 3000,
      });
    }
  }, [deleteAccountMutation.isSuccess, deleteAccountMutation.isError, toast]);

  return (
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
          <AlertDialogAction
            onClick={() => {
              deleteAccountMutation.mutate();
            }}
          >
            네 탈퇴할게요
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
