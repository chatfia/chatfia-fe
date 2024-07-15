import { fetchExtended } from "@/app/apis/baseApi";
import {
  LogInRequest,
  VerifyEmailRequest,
  VerifyCodeRequest,
  SignUpRequest,
  SignUpResponse,
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
  logIn: async (logInUserData: LogInRequest) => {
    return fetchExtended("/api/login", {
      method: "POST",
      body: JSON.stringify(logInUserData),
    });
  },

  // 로그아웃
  logOut: () => {
    return fetchExtended("/api/logout", {
      method: "POST",
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

  // 회원가입
  signUp: async (signUpUserData: SignUpRequest): Promise<SignUpResponse> => {
    const response = await fetchExtended("/api/signup", {
      method: "POST",
      body: JSON.stringify(signUpUserData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await (response.json() as Promise<SignUpResponse>);
  },
};
