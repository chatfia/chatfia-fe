import { useAuthStore } from "@/app/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useDeleteAccount = () => {
  const logOut = useAuthStore((state) => state.logOut);

  return useMutation({
    mutationKey: ["deleteAccount"],
    mutationFn: authApi.deleteAccount,
    onSuccess: () => {
      logOut();
      console.log("회원탈퇴가 성공적으로 완료되었습니다.");
    },
    onError: (error) => {
      console.error("회원탈퇴 API 호출 중 에러 발생: ", error);
    },
  });
};
