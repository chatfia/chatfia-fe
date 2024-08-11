import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useSignUp = () => {
  return useMutation({
    mutationFn: authApi.signUp,
    onError: (error) => {
      console.error("회원가입 중 에러 발생:", error);
    },
  });
};
