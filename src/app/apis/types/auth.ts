// auth 페이지 props 타입 정의
export interface AuthFormProps {
  step: number; // 현재 단계(로그인 또는 회원가입)
  setStep: (step: number) => void; // 단계 설정 함수
}

// 회원가입 및 로그인 시 공통 입력 타입
export interface Credentials {
  email: string;
  password: string;
}

// 로그인 후 응답 타입
export interface LogInResponse {
  isSuccess: boolean;
  code: number;
  message: string;
}

// 이메일 인증 입력 타입
export interface VerifyEmailRequest {
  email: string;
}

// 인증번호 입력 타입
export interface VerifyCodeRequest {
  email: string;
  code: string;
}

// 회원가입 시 추가 입력 타입
export interface SignUpRequest extends Credentials {
  nickname: string;
  confirmPassword: string;
}

// 회원가입 후 응답 타입
export interface SignUpResponse {
  id: number;
  email: string;
  nickname: string;
}

// 닉네임 수정 시 응답 타입
export interface UpdateNicknameResponse {
  id: number;
  email: string;
  nickname: string;
}

// 비밀번호 수정 시 입력 타입
export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}
