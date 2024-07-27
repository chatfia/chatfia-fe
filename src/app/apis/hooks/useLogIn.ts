import { authApi } from "@/app/apis/authApi";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/app/stores/useAuthStore";

export const useLogIn = () => {
  const logIn = useAuthStore((state) => state.logIn);
  const setIsSuccess = useAuthStore((state) => state.setIsSuccess);

  return useMutation({
    mutationKey: ["logIn"],
    mutationFn: authApi.logIn,
    onSuccess: (response: any) => {
      const isSuccess = response?.isSuccess;
      console.log(isSuccess);
      if (isSuccess) {
        logIn();
        setIsSuccess(isSuccess);
      }
    },
    onError: (error) => {
      console.error("로그인 API 호출 중 에러 발생:", error);
    },
  });
};
