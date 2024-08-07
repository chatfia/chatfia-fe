import { z } from "zod";
import { signUpSchema } from "@/app/validators/auth";
import { useToast } from "@/components/ui/use-toast";
import { useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";
import { VerifyEmailRequest, VerifyCodeRequest } from "@/app/apis/types/auth";
import { useVerifyEmail } from "@/app/apis/hooks/useVerifyEmail";
import { useVerifyCode } from "@/app/apis/hooks/useVerifyCode";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type SignUpInput = z.infer<typeof signUpSchema>;

export const EmailVerification: React.FC = () => {
  const { toast } = useToast();
  const { getValues, control } = useFormContext<SignUpInput>();
  const [showVerifyCodeForm, setShowVerifyCodeForm] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const [isCallingApi, setIsCallingApi] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);

  // 이메일 인증 및 인증번호 검증 관련 상태
  const [verifyEmailData, setVerifyEmailData] =
    useState<VerifyEmailRequest | null>(null);
  const [verifyCodeData, setVerifyCodeData] =
    useState<VerifyCodeRequest | null>(null);

  // 이메일 인증 및 인증번호 검증 결과 및 오류를 가져오는 훅
  const { data: verifyEmailResult, error: verifyEmailError } =
    useVerifyEmail(verifyEmailData);
  const { data: verifyCodeResult, error: verifyCodeError } =
    useVerifyCode(verifyCodeData);

  // 이메일 인증 요청 함수
  const handleVerifyEmail = () => {
    if (isCallingApi) return; // 이미 API 호출 중이면 실행하지 않음

    const email = getValues("email");

    if (email) {
      setVerifyEmailData({ email });
      setShowVerifyCodeForm(true);
      setIsEmailVerified(true);
      setIsCallingApi(true); // API 호출 상태 설정
    } else {
      toast({
        title: "이메일을 입력해주세요.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  // 이메일 인증번호 확인 요청 함수
  const handleVerifyCode = () => {
    if (isVerifyingCode) return; // 이미 인증번호 검증 중이면 실행하지 않음

    const email = getValues("email");
    const code = getValues("emailVerifyCode");

    if (email && code) {
      setVerifyCodeData({ email, code });
      setIsVerifyingCode(true); // 인증번호 검증 상태 설정
    } else {
      toast({
        title: "이메일과 인증번호를 모두 입력해주세요.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  // 이메일 인증번호 발송 성공/실패 시 알림 처리
  useEffect(() => {
    if (verifyEmailResult) {
      toast({
        title: "이메일 인증번호가 발송되었습니다.",
        variant: "success",
        duration: 3000,
      });
      setVerifyEmailData(null);
    } else if (verifyEmailError) {
      toast({
        title: "이메일 인증번호 발송에 실패했습니다.",
        description: verifyEmailError.message,
        variant: "destructive",
        duration: 3000,
      });
      setVerifyEmailData(null);
    }
  }, [verifyEmailResult, verifyEmailError, toast]);

  // 이메일 인증번호 인증 성공/실패 시 알림 처리
  useEffect(() => {
    if (verifyCodeResult) {
      toast({
        title: "이메일 인증에 성공했습니다.",
        variant: "success",
        duration: 3000,
      });
      setVerifyCodeData(null);
    } else if (verifyCodeError) {
      toast({
        title: "이메일 인증에 실패했습니다.",
        description: verifyCodeError.message,
        variant: "destructive",
        duration: 3000,
      });
      setVerifyCodeData(null);
    }
  }, [verifyCodeResult, verifyCodeError, toast]);

  useEffect(() => {
    if (verifyEmailResult || verifyEmailError) {
      setIsCallingApi(false); // 이메일 인증 API 호출이 완료되면 상태를 초기화
    }
    if (verifyCodeResult || verifyCodeError) {
      setIsVerifyingCode(false); // 인증번호 검증 API 호출이 완료되면 상태를 초기화
    }
  }, [verifyEmailResult, verifyEmailError, verifyCodeResult, verifyCodeError]);

  return (
    <>
      <div className="flex items-end space-x-2">
        <div className="flex-1">
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input
                    placeholder="swordmaster@sparta-devcamp.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          onClick={handleVerifyEmail}
          type="button"
          className={cn("text-sm duration-300 hover:bg-secondary", {
            "cursor-not-allowed bg-gray-400": isEmailVerified,
          })}
          disabled={isEmailVerified}
        >
          이메일 인증
        </Button>
      </div>
      <AnimatePresence>
        {showVerifyCodeForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="flex items-end space-x-2 px-4 pb-1">
              <div className="flex-1">
                <FormField
                  control={control}
                  name="emailVerifyCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일 인증번호</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                onClick={handleVerifyCode}
                type="button"
                className="text-sm duration-300 hover:bg-secondary"
              >
                인증번호 확인
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
