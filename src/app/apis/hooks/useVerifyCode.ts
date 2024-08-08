import { VerifyCodeRequest } from "@/app/apis/types/auth";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useVerifyCode = (codeData: VerifyCodeRequest | null) => {
  return useQuery({
    queryKey: ["verifyCode", codeData],
    // queryFn: () => authApi.verifyCode(codeData!),
    queryFn: () => {
      console.log("인증번호 확인 API 호출 중... 전달된 데이터:", codeData);
      return authApi.verifyCode(codeData!);
    },
    staleTime: 0,
    gcTime: 300000,
    enabled: !!codeData && !!codeData.email,
  });
};
