import { authApi } from "@/app/apis/authApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { LogInResponse, LogInRequest } from "@/app/types/auth";

export const useLogIn = () => {
  const logIn = useAuthStore((state) => state.logIn);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  const queryClient = useQueryClient();

  return useMutation<LogInResponse, Error, LogInRequest>({
    mutationFn: (logInUserData: LogInRequest) => authApi.logIn(logInUserData),
    onSuccess: async (data) => {
      if (data.isSuccess) {
        console.log("로그인 성공");
        logIn();

        try {
          // 로그인 성공 후 사용자 정보 조회
          const userInfo = await queryClient.fetchQuery({
            queryKey: ["getUserInfo"],
            queryFn: authApi.getUserInfo,
          });
          setUserInfo(userInfo);
        } catch (error) {
          console.error("사용자 정보 조회 API 호출 중 에러 발생: ", error);
        }
      } else {
        console.error("로그인 실패: ", data.message);
      }
    },
    onError: (error) => {
      console.error("로그인 API 호출 중 에러 발생: ", error);
    },
  });
};
