import { z } from "zod";
import { signUpSchema } from "@/app/validators/auth";
import { AuthFormProps } from "@/app/types/auth";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

  // 회원가입 폼 제출 핸들러
  function onSignUpSubmit(data: SignUpInput) {
    console.log("회원가입: ", data);
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    // signUpMutation.mutate(data); // 회원가입 뮤테이션 실행
  }

  return (
    <Form {...signUpForm}>
      <form
        onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}
        className="relative space-y-3 overflow-x-hidden p-6"
        method="GET"
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
      </form>
    </Form>
  );
};
