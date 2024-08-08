import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";
import { SignUpResponse } from "@/app/apis/types/auth";

export const useSignUp = () => {
  return useMutation({
    mutationFn: authApi.signUp,
    onSuccess: (data: SignUpResponse) => {
      console.log("회원가입 성공:", data);
    },
    onError: (error) => {
      console.error("회원가입 중 에러 발생:", error);
    },
  });
};
