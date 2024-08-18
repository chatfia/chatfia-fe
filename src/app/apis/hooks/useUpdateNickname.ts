import { useNicknameStore } from "@/app/stores/useNicknameStore";
import { useUserStore } from "@/app/stores/useUserStore";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";

export const useUpdateNickname = () => {
  const setNickname = useNicknameStore((state) => state.setNickname);
  const { setUserInfo } = useUserStore(); // UserStore의 setUserInfo 함수도 가져옴

  return useMutation({
    mutationFn: authApi.updateNickname,
    onSuccess: (data) => {
      setNickname(data.newNickname);
      setUserInfo(data.newNickname, data.email); // UserStore에 있는 정보 업데이트
    },
    onError: (error) => {
      console.error("닉네임 수정 중 에러 발생:", error);
    },
  });
};
