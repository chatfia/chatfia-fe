import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";
import { SignUpResponse } from "@/app/apis/types/auth";

export const useSignUp = () => {
  return useMutation({
    mutationFn: authApi.signUp,
    onSuccess: (data: SignUpResponse) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
