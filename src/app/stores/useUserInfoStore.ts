import { create } from "zustand";
import { UserInfoResponse } from "@/app/apis/types/auth";

interface UserInfoState {
  isSuccess: boolean;
  userInfo: UserInfoResponse | null;
  setUserInfo: (userInfo: UserInfoResponse) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  clearUserInfo: () => void;
}

export const useUserInfoStore = create<UserInfoState>((set) => ({
  isSuccess: false,
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  setIsSuccess: (isSuccess) => set({ isSuccess }),
  clearUserInfo: () => set({ userInfo: null, isSuccess: false }),
}));
