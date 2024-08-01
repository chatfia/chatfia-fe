import { useUserStore } from "@/app/stores/useUserStore";
import { useQuery, QueryFunction } from "@tanstack/react-query";
import { UserInfoResponse } from "@/app/apis/types/auth";
import { authApi } from "@/app/apis/authApi";

export const useUserInfo = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const fetchUserInfo: QueryFunction<UserInfoResponse> = async () => {
    const response = await authApi.checkAuth();
    const data: UserInfoResponse = await response.json();

    if (data.loggedIn) {
      setUserInfo(data);
      return data;
    } else {
      throw new Error("로그인 정보가 없습니다");
    }
  };

  return useQuery<UserInfoResponse, Error>({
    queryKey: ["userInfo"],
    queryFn: fetchUserInfo,
  });
};
