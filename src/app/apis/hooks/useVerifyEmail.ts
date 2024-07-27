import { VerifyEmailRequest } from "@/app/apis/types/auth";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useVerifyEmail = (emailData: VerifyEmailRequest | null) => {
  return useQuery({
    queryKey: ["verifyEmail", emailData],
    queryFn: () => authApi.verifyEmail(emailData!),
    staleTime: 0,
    gcTime: 300000,
    enabled: !!emailData && !!emailData.email,
  });
};
