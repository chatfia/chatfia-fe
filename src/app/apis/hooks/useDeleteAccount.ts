import { useAuthStore } from "@/app/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useDeleteAccount = () => {
  const logOut = useAuthStore((state) => state.logOut);
  const router = useRouter();

  return useMutation({
    mutationKey: ["deleteAccount"],
    mutationFn: authApi.deleteAccount,
    onSuccess: () => {
      logOut();
      router.push("/");
    },
    onError: (error) => {
      console.error("회원탈퇴 API 호출 중 에러 발생: ", error);
    },
  });
};
