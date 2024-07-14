import { VerifyCodeRequest } from "@/app/types/auth";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useVerifyCode = (codeData: VerifyCodeRequest | null) => {
  return useQuery({
    queryKey: ["verifyCode", codeData],
    queryFn: () => authApi.verifyCode(codeData!),
    staleTime: 0,
    gcTime: 300000,
    enabled: !!codeData && !!codeData.email,
  });
};
