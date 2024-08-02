import { useUserStore } from "@/app/stores/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useUserInfo = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const query = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      console.log("Fetching user info..."); // API 호출 전에 로그 추가
      const response = await authApi.checkAuth();

      console.log("API Response:", response); // API 응답 확인

      if (!response.ok) {
        console.error("Failed to fetch user info. Response not OK."); // 실패한 경우 로그 출력
        throw new Error("Failed to fetch user info");
      }

      const data = await response.json();

      console.log("Parsed Data:", data); // JSON 파싱 후 데이터 확인

      if (data.loggedIn) {
        setUserInfo(data.nickname, data.email);
        console.log("User info set in store:", data.nickname, data.email); // 상태 설정 후 로그 출력
        return data;
      } else {
        console.error("User is not logged in."); // 로그인되지 않은 경우 로그 출력
        throw new Error("로그인 정보를 불러오는데 실패했습니다.");
      }
    },
  });

  // onError 처리
  if (query.isError) {
    console.error("Error fetching user info:", query.error);
  }

  return query;
};
