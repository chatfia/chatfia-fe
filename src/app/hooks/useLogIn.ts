import { authApi } from "@/app/apis/authApi";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/app/stores/useUserStore";

export const useLogIn = () => {
  const queryClient = useQueryClient();
  const logIn = useUserStore((state: any) => state.logIn);

  return useMutation({
    mutationFn: authApi.logIn,
    onSuccess: async () => {
      try {
        // 사용자 정보를 가져오는 쿼리
        const data = await queryClient.fetchQuery({
          queryKey: ["getUserInfo"],
          queryFn: authApi.getUserInfo,
        });
        logIn(data);
      } catch (error) {
        console.error("사용자 정보 조회 API 호출 중 에러 발생 : ", error);
      }
    },
    onError: (error) => {
      console.error("로그인 API 호출 중 에러 발생 : ", error);
    },
  });
};
