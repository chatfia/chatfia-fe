import { authApi } from "@/app/apis/authApi";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/app/stores/useAuthStore";

export const useLogIn = () => {
  const logIn = useAuthStore((state: any) => state.logIn);

  return useMutation({
    mutationKey: ["logIn"],
    mutationFn: authApi.logIn,
    onSuccess: () => {
      console.log("로그인 성공");
      logIn();
    },
    onError: (error) => {
      console.error("로그인 API 호출 중 에러 발생 : ", error);
    },
  });
};
