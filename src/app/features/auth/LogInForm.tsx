import { z } from "zod";
import { logInSchema } from "@/app/validators/auth";
import { AuthFormProps } from "@/app/apis/types/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogIn } from "@/app/apis/hooks/useLogIn";
import { useEffect } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// 로그인 입력 타입 정의
type LogInInput = z.infer<typeof logInSchema>;

export const LogInForm: React.FC<AuthFormProps> = ({ step, setStep }) => {
  const router = useRouter();
  const { toast } = useToast();

  // react-hook-form을 사용한 로그인 폼 상태 관리
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
    logInMutation.mutate(data); // 로그인 뮤테이션 실행
  }

  // 로그인 성공/실패 시 알림 처리
  useEffect(() => {
    if (logInMutation.isSuccess) {
      toast({
        title: "로그인에 성공했습니다. 즐거운 시간 되세요!",
        variant: "success",
        duration: 3000,
      });
      router.push("/"); // 로그인 성공 시 홈으로 리다이렉트
    } else if (logInMutation.isError) {
      let title = "로그인에 실패했습니다. 다시 로그인을 진행해 주세요.";
      let errorDescription = "";
      if (logInMutation.error.message.includes("아이디가 잘못되었습니다.")) {
        errorDescription = "아이디가 잘못되었습니다.";
      } else if (
        logInMutation.error.message.includes("비밀번호가 잘못되었습니다.")
      ) {
        errorDescription = "비밀번호가 잘못되었습니다.";
      }
      toast({
        title,
        description: errorDescription,
        variant: "destructive",
        duration: 3000,
      });
    }
  }, [
    logInMutation.isSuccess,
    logInMutation.isError,
    logInMutation.error,
    router,
    toast,
  ]);

  return (
    <Form {...logInForm}>
      <form
        onSubmit={logInForm.handleSubmit(onLogInSubmit)}
        className="relative space-y-3 overflow-x-hidden p-1"
        method="GET"
      >
        <FormField
          control={logInForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={logInForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={cn("flex justify-center gap-4 pt-8")}>
          <Button
            type="button"
            variant="ghost"
            className={cn({ hidden: step === 1 })}
          >
            <Link href="/">홈으로</Link>
          </Button>
          <Button
            type="submit"
            variant="ghost"
            className={cn({ hidden: step === 1 })}
          >
            로그인
          </Button>
          <Button
            type="button"
            variant="ghost"
            className={cn({ hidden: step === 1 })}
            onClick={() => {
              setStep(1);
            }}
          >
            회원가입
          </Button>
        </div>
      </form>
    </Form>
  );
};
