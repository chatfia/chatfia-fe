import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";
import { UserInfoResponse } from "@/app/apis/types/auth";
import { useUserInfoStore } from "@/app/stores/useUserInfoStore";

export const useUserInfo = () => {
  const { isSuccess, setUserInfo } = useUserInfoStore();
  console.log(isSuccess);

  const { data, error, isLoading } = useQuery<UserInfoResponse>({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const data = await authApi.getUserInfo();
      setUserInfo(data); // 상태 업데이트
      return data;
    },
    enabled: isSuccess, // isSuccess가 true일 때만 쿼리 실행
    retry: false,
    staleTime: 1000 * 60 * 5, // 데이터가 5분 동안 신선한 상태로 유지
  });

  return {
    userInfo: data ?? null,
    error,
    isLoading,
  };
};
