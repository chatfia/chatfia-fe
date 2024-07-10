import { fetchExtended } from "@/app/apis/baseApi";
import { LogInRequest } from "@/app/types/auth";

export const authApi = {
  // 로그인
  logIn: async (logInUserData: LogInRequest) => {
    try {
      const response = await fetchExtended("/api/login", {
        method: "POST",
        body: JSON.stringify(logInUserData), // 필요한 경우 headers 설정도 여기에 추가 가능
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      const data = await response.json(); // 응답을 JSON으로 파싱
      return data; // 파싱된 데이터 반환
    } catch (error) {
      console.error("Login error:", error);
      throw error; // 에러를 호출자에게 전파
    }
  },
};
