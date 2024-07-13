import { fetchExtended } from "@/app/apis/baseApi";
import { LogInRequest } from "@/app/types/auth";
import { UserInfoResponse } from "@/app/types/auth";

export const authApi = {
  // 로그인
  logIn: (logInUserData: LogInRequest) => {
    return fetchExtended("/api/login", {
      method: "POST",
      body: JSON.stringify(logInUserData),
    });
  },

  // 회원정보 조회
  getUserInfo: async (): Promise<UserInfoResponse> => {
    const response = await fetchExtended("/api/info", {
      method: "GET",
    });
    return await response.json();
  },
};
