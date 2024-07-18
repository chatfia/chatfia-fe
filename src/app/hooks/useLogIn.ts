import { authApi } from "@/app/apis/authApi";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { LogInResponse, LogInRequest } from "@/app/types/auth";

export const useLogIn = () => {
  const logIn = useAuthStore((state) => state.logIn);

  return useMutation<LogInResponse, Error, LogInRequest>({
    mutationFn: (logInUserData: LogInRequest) => authApi.logIn(logInUserData),
    onSuccess: (data) => {
      if (data.isSuccess) {
        console.log("로그인 성공");
        logIn(); // 상태 변경
      } else {
        console.error("로그인 실패: ", data.message);
      }
    },
    onError: (error) => {
      console.error("로그인 API 호출 중 에러 발생 : ", error);
    },
  });
};
