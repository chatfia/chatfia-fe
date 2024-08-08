import { VerifyCodeRequest } from "@/app/apis/types/auth";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useVerifyCode = (codeData: VerifyCodeRequest | null) => {
  return useQuery({
    queryKey: ["verifyCode", codeData],
    queryFn: async () => {
      const response = await authApi.verifyCode(codeData!);

      if (response.ok) {
        return true;
      } else {
        throw new Error("인증번호 확인 실패");
      }
    },
    enabled: !!codeData && !!codeData.email,
    staleTime: 0,
    gcTime: 300000,
  });
};
