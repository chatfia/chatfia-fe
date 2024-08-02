import { useUserStore } from "@/app/stores/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useUserInfo = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const query = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      console.log("사용자 정보를 가져오는 중...");
      const response = await authApi.checkAuth();

      // 상태 코드와 응답 헤더를 출력해 상태를 확인합니다.
      console.log("HTTP 상태 코드:", response.status);

      console.log("응답 헤더:");
      for (const [key, value] of response.headers.entries()) {
        console.log(`${key}: ${value}`);
      }

      if (!response.ok) {
        console.error(
          "사용자 정보를 가져오는데 실패했습니다. 응답 상태가 OK가 아닙니다.",
          response.statusText,
        );
        throw new Error("사용자 정보를 가져오는데 실패했습니다.");
      }

      const data = await response.json();
      console.log("파싱된 데이터:", data);

      if (data.loggedIn) {
        setUserInfo(data.nickname, data.email);
        return data;
      } else {
        throw new Error("로그인 정보를 불러오는데 실패했습니다.");
      }
    },
  });

  // onError 처리
  if (query.isError) {
    console.error(
      "사용자 정보를 가져오는 중 오류가 발생했습니다:",
      query.error,
    );
  }

  return query;
};
