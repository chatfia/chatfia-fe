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

// 로그인 시 입력 타입
export type LogInRequest = Credentials;

// 로그인 후 응답 타입
export interface LogInResponse {
  isSuccess: boolean;
  code: number;
  message: string;
}

// 로그인 후 정보 조회
export interface UserInfoResponse {
  loggedIn: boolean;
  nickname: string;
  email: string;
  wins: number;
  losses: number;
  mafiaWins: number;
  mafiaLosses: number;
  policeWins: number;
  policeLosses: number;
  doctorWins: number;
  doctorLosses: number;
  citizenWins: number;
  citizenLosses: number;
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
