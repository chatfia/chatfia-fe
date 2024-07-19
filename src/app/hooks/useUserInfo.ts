import { authApi } from "@/app/apis/authApi";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { UserInfoResponse } from "@/app/types/auth";

export const useUserInfo = () => {
  const queryClient = useQueryClient();
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  return async (): Promise<void> => {
    try {
      const userInfo = await queryClient.fetchQuery<UserInfoResponse>({
        queryKey: ["getUserInfo"],
        queryFn: authApi.getUserInfo,
      });
      setUserInfo(userInfo);
    } catch (error) {
      console.error("사용자 정보 조회 API 호출 중 에러 발생: ", error);
    }
  };
};
