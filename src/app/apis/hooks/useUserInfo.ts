import { useUserStore } from "@/app/stores/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useUserInfo = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const query = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const data: any = await authApi.checkAuth();

      console.log("받은 데이터:", data);

      if (data.loggedIn) {
        setUserInfo(data.nickname, data.email);
        return data;
      } else {
        throw new Error("로그인 정보를 불러오는데 실패했습니다.");
      }
    },
  });

  if (query.isError) {
    console.error(
      "사용자 정보를 가져오는 중 오류가 발생했습니다:",
      query.error,
    );
  }

  return query;
};
