import { usePasswordStore } from "@/app/stores/usePasswordStore";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useUpdatePassword = () => {
  const setError = usePasswordStore((state) => state.setError);

  return useMutation({
    mutationFn: authApi.updatePassword,
    onSuccess: () => {
      setError(null);
      console.log("비밀번호가 성공적으로 변경되었습니다.");
    },
    onError: (error) => {
      setError("비밀번호 변경 중 오류가 발생했습니다.");
      console.error("비밀번호 변경 중 오류가 발생했습니다:", error);
    },
  });
};
