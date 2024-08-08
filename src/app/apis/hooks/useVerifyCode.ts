import { VerifyCodeRequest } from "@/app/apis/types/auth";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useVerifyCode = (codeData: VerifyCodeRequest | null) => {
  return useQuery({
    queryKey: ["verifyCode", codeData],
    queryFn: async () => {
      const response = await authApi.verifyCode(codeData!);
      // 응답이 성공했지만 본문이 없는 경우 true 반환
      return response !== undefined ? response : true;
    },
    staleTime: 0,
    gcTime: 300000,
    enabled: !!codeData && !!codeData.email,
  });
};
