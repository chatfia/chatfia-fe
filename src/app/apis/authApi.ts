import { fetchExtended } from "@/app/apis/baseApi";
import {
  LogInRequest,
  VerifyEmailRequest,
  VerifyCodeRequest,
} from "@/app/types/auth";
import { UserInfoResponse } from "@/app/types/auth";

export const authApi = {
  // 회원정보 조회
  getUserInfo: async (): Promise<UserInfoResponse> => {
    const response = await fetchExtended("/api/info", {
      method: "GET",
    });
    return await response.json();
  },

  // 로그인
  logIn: (logInUserData: LogInRequest) => {
    return fetchExtended("/api/login", {
      method: "POST",
      body: JSON.stringify(logInUserData),
    });
  },

  // 이메일 인증
  verifyEmail: (emailData: VerifyEmailRequest) => {
    return fetchExtended("/mail", {
      method: "POST",
      body: JSON.stringify(emailData),
    });
  },

  // 인증번호 확인
  verifyCode: (codeData: VerifyCodeRequest) => {
    return fetchExtended("/mail/code", {
      method: "POST",
      body: JSON.stringify(codeData),
    });
  },
};
