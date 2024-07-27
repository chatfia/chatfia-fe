import { useAuthStore } from "@/app/stores/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { UserInfoResponse } from "@/app/apis/types/auth";
import { authApi } from "@/app/apis/authApi";
import { useEffect, useRef } from "react";

export const useUserInfo = () => {
  const isSuccess = useAuthStore((state) => state.isSuccess);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  const hasFetchedRef = useRef(false); // useRef로 한 번만 호출되도록 설정

  const query = useQuery<UserInfoResponse, Error>({
    queryKey: ["userInfo"],
    queryFn: authApi.getUserInfo,
    enabled: false, // 기본적으로 쿼리 실행을 막음
  });

  useEffect(() => {
    if (isSuccess && !hasFetchedRef.current) {
      query.refetch();
      hasFetchedRef.current = true; // 호출 후 true로 설정
    }
  }, [isSuccess, query]);

  useEffect(() => {
    if (query.isSuccess && query.data) {
      setUserInfo(query.data);
    }
  }, [query.isSuccess, query.data, setUserInfo]);

  useEffect(() => {
    if (query.isError && query.error) {
      console.error("회원정보 조회 API 호출 중 에러 발생:", query.error);
    }
  }, [query.isError, query.error]);

  return query;
};
