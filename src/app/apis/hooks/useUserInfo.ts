import { useUserStore } from "@/app/stores/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useUserInfo = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await authApi.checkAuth();
      const data = await response.json();

      if (data.loggedIn) {
        setUserInfo(data.nickname, data.email);
        return data;
      } else {
        throw new Error("로그인 정보를 불러오는데 실패했습니다.");
      }
    },
  });
};
