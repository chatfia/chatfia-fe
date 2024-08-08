import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useUpdateNickname = () => {
  return useMutation({
    mutationFn: authApi.updateNickname,
  });
};
