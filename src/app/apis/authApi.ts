import { fetchExtended } from "@/app/apis/baseApi";
import {
  LogInRequest,
  VerifyEmailRequest,
  VerifyCodeRequest,
  SignUpRequest,
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
  signUp: async (signUpUserData: SignUpRequest): Promise<any> => {
    return fetchExtended("/api/signup", {
      method: "POST",
      body: JSON.stringify(signUpUserData),
    });
  },

  // 회원탈퇴
  deleteAccount: async () => {
    return fetchExtended("/api/delete", {
      method: "DELETE",
    });
  },

  // 닉네임 수정
  updateNickname: async (nickname: string): Promise<any> => {
    console.log("updateNicname API : nickname > ", nickname);
    return fetchExtended("/api/info/nickname", {
      method: "PATCH",
      body: JSON.stringify({ nickname }),
    });
  },

  // 비밀번호 변경
  updatePassword: async (password: string): Promise<any> => {
    return fetchExtended("/api/info/password", {
      method: "PATCH",
      body: JSON.stringify({ password }),
    });
  },
};
