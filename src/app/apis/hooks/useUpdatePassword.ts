import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: authApi.updatePassword,
  });
};
