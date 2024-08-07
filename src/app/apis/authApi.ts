import { fetchExtended } from "@/app/apis/baseApi";
import {
  UserInfoResponse,
  LogInRequest,
  VerifyEmailRequest,
  VerifyCodeRequest,
  SignUpRequest,
  SignUpResponse,
} from "@/app/apis/types/auth";

export const authApi = {
  // 로그인
  logIn: async (logInUserData: LogInRequest) => {
    return await fetchExtended("/api/login", {
      method: "POST",
      body: JSON.stringify(logInUserData),
    });
  },

  // 로그인 후 정보
  checkAuth: async () => {
    return fetchExtended("/api/auth/check", {
      method: "GET",
    });
  },

  // 로그아웃
  logOut: async () => {
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
    return response.json();
  },
};
