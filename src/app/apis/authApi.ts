import { fetchExtended } from "@/app/apis/baseApi";
import {
  LogInRequest,
  VerifyEmailRequest,
  VerifyCodeRequest,
  SignUpRequest,
  SignUpResponse,
} from "@/app/apis/types/auth";

export const authApi = {
  // 로그인
  logIn: async (logInUserData: LogInRequest) => {
    return fetchExtended("/api/login", {
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
    const data = await fetchExtended("/api/signup", {
      method: "POST",
      body: JSON.stringify(signUpUserData),
    });

    // 반환된 데이터가 SignUpResponse 타입과 일치하는지 확인
    if (
      data &&
      typeof data === "object" &&
      "id" in data &&
      "email" in data &&
      "nickname" in data
    ) {
      return data as SignUpResponse;
    } else {
      throw new Error("서버 응답이 올바르지 않습니다.");
    }
  },

  // 회원탈퇴
  deleteAccount: async () => {
    return fetchExtended("/api/delete", {
      method: "DELETE",
    });
  },
};
