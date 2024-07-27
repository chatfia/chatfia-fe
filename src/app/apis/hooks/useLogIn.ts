import { authApi } from "@/app/apis/authApi";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { useUserInfoStore } from "@/app/stores/useUserInfoStore";

export const useLogIn = () => {
  const logIn = useAuthStore((state: any) => state.logIn);
  const setIsSuccess = useUserInfoStore((state: any) => state.setIsSuccess);

  return useMutation({
    mutationKey: ["logIn"],
    mutationFn: authApi.logIn,
    onSuccess: (response: any) => {
      console.log("로그인 성공", response);

      const loginSuccess = response?.isSuccess;
      console.log(loginSuccess);
      if (loginSuccess) {
        logIn();
        // isSuccess zustand store 저장 코드 작성하기
        setIsSuccess(loginSuccess);
      }
    },
    onError: (error) => {
      console.error("로그인 API 호출 중 에러 발생:", error);
    },
  });
};
