import { z } from "zod";
import { signUpSchema } from "@/app/validators/auth";
import { AuthFormProps } from "@/app/apis/types/auth";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "@/app/apis/hooks/useSignUp";
import { useEffect } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { EmailVerification } from "@/app/features/auth/EmailVerification";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// 회원가입 입력 타입 정의
type SignUpInput = z.infer<typeof signUpSchema>;

export const SignUpForm: React.FC<AuthFormProps> = ({ step, setStep }) => {
  const { toast } = useToast();

  // react-hook-form을 사용한 회원가입 폼 상태 관리
  const signUpForm = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema), // zod를 사용한 스키마 유효성 검사
    defaultValues: {
      email: "",
      emailVerifyCode: "",
      nickname: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signUpMutation = useSignUp(); // 회원가입 뮤테이션 훅 사용

  // 회원가입 폼 제출 핸들러
  function onSignUpSubmit(data: SignUpInput) {
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    signUpMutation.mutate(data); // 회원가입 뮤테이션 실행
  }

  // 회원가입 성공/실패 시 알림 처리
  useEffect(() => {
    if (signUpMutation.isSuccess) {
      toast({
        title: "회원가입에 성공했습니다.",
        variant: "success",
        duration: 3000,
      });
      setStep(0); // 회원가입 성공 시 로그인 단계로 전환
    } else if (signUpMutation.isError) {
      toast({
        title: "회원가입에 실패했습니다.",
        description: signUpMutation.error.message,
        variant: "destructive",
        duration: 3000,
      });
    }
  }, [
    signUpMutation.isSuccess,
    signUpMutation.isError,
    signUpMutation.error,
    setStep,
    toast,
  ]);

  return (
    <Form {...signUpForm}>
      <form
        onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}
        className="relative space-y-3 overflow-x-hidden p-6"
        method="POST"
      >
        <EmailVerification />
        <FormField
          control={signUpForm.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>닉네임</FormLabel>
              <FormControl>
                <Input placeholder="고길동" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signUpForm.control}
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
        <FormField
          control={signUpForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호 확인</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={cn("flex justify-center gap-2 pt-4")}>
          <Button
            type="button"
            variant="ghost"
            className={cn({ hidden: step === 0 })}
            onClick={() => {
              setStep(0);
            }}
          >
            로그인하기
          </Button>
          <Button
            type="submit"
            variant="ghost"
            className={cn({ hidden: step === 0 })}
          >
            계정 등록하기
          </Button>
        </div>
      </form>
    </Form>
  );
};
