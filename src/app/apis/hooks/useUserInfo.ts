import { useAuthStore } from "@/app/stores/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { UserInfoResponse } from "@/app/apis/types/auth";
import { authApi } from "@/app/apis/authApi";
import { useEffect } from "react";

export const useUserInfo = () => {
  const isSuccess = useAuthStore((state) => state.isSuccess);
  const userInfo = useAuthStore((state) => state.userInfo);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  const query = useQuery<UserInfoResponse, Error>({
    queryKey: ["userInfo"],
    queryFn: authApi.getUserInfo,
    enabled: isSuccess, // isSuccess가 true일 때만 쿼리 실행
  });

  useEffect(() => {
    if (query.isSuccess && query.data) {
      setUserInfo(query.data);
    }
  }, [query.isSuccess, query.data, setUserInfo]);

  return { userInfo, fetchUserInfo: query.refetch };
};
