import { create } from "zustand";
import { UserInfoResponse } from "@/app/apis/types/auth";

interface AuthState {
  isSuccess: boolean;
  setIsSuccess: (isSuccess: boolean) => void;
  logIn: () => void;
  logOut: () => void;
  userInfo: UserInfoResponse | null;
  setUserInfo: (userInfo: UserInfoResponse) => void;
  clearUserInfo: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isSuccess: false,
  setIsSuccess: (isSuccess) => set({ isSuccess }),
  logIn: () => set({ isSuccess: true }),
  logOut: () => set({ isSuccess: false, userInfo: null }),
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  clearUserInfo: () => set({ isSuccess: false, userInfo: null }),
}));

// 상태 변경 시 콘솔 출력
useAuthStore.subscribe((state) => {
  console.log("AuthStore State:", state);
});
