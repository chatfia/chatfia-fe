import { useAuthStore } from "@/app/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { UserInfoResponse } from "@/app/apis/types/auth";
import { authApi } from "@/app/apis/authApi";

export const useUserInfo = () => {
  const isSuccess = useAuthStore((state) => state.isSuccess);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  const mutation = useMutation<UserInfoResponse, Error>({
    mutationFn: authApi.getUserInfo,
    onSuccess: (data) => {
      setUserInfo(data);
    },
    onError: (error) => {
      console.error("회원정보 조회 API 호출 중 에러 발생:", error);
    },
  });

  const fetchUserInfo = () => {
    if (isSuccess) {
      mutation.mutate();
    }
  };

  return { ...mutation, fetchUserInfo };
};
