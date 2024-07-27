import { useAuthStore } from "@/app/stores/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { UserInfoResponse } from "@/app/apis/types/auth";
import { authApi } from "@/app/apis/authApi";
import { useEffect } from "react";

export const useUserInfo = () => {
  const isSuccess = useAuthStore((state) => state.isSuccess);
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

  // useEffect(() => {
  //   if (query.isError && query.error) {
  //     console.error("회원정보 조회 API 호출 중 에러 발생:", query.error);
  //   }
  // }, [query.isError, query.error]);

  return query;
};
