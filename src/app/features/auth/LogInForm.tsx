import { z } from "zod";
import { logInSchema } from "@/app/validators/auth";
import { LogInFormProps } from "@/app/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useLogIn } from "@/app/hooks/useLogIn";

// 로그인 입력 타입 정의
type LogInInput = z.infer<typeof logInSchema>;

// react-hook-form을 사용한 로그인 폼 상태 관리
export const LogInForm: React.FC<LogInFormProps> = ({ step, setStep }) => {
  const logInForm = useForm<LogInInput>({
    resolver: zodResolver(logInSchema), // zod를 사용한 스키마 유효성 검사
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const logInMutation = useLogIn(); // 로그인 뮤테이션 훅 사용

  // 로그인 폼 제출 핸들러
  function onLogInSubmit(data: LogInInput) {
    console.log("로그인: ", data);
    logInMutation.mutate(data); // 로그인 뮤테이션 실행
  }

  return (
    <Form {...logInForm}>
      <form
        onSubmit={logInForm.handleSubmit(onLogInSubmit)}
        className="relative space-y-3 overflow-x-hidden"
        method="GET"
      ></form>
    </Form>
  );
};
