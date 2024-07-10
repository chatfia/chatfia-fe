// auth 페이지 props 타입 정의
export interface LogInFormProps {
  step: number;
  setStep: (step: number) => void;
}

// 회원가입 및 로그인 시 공통 입력 타입
export interface Credentials {
  email: string;
  password: string;
}

// 로그인 시 입력 타입
export type LogInRequest = Credentials;
