import { create } from "zustand";
import { UserInfoResponse } from "@/app/types/auth";

interface AuthState {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  userInfo: UserInfoResponse | null;
  setUserInfo: (userInfo: UserInfoResponse) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  userInfo: null,
  logIn: () => {
    set({ isLoggedIn: true });
  },
  logOut: () => {
    set({ isLoggedIn: false, userInfo: null });
  },
  setUserInfo: (userInfo: UserInfoResponse) => {
    set({ userInfo });
  },
}));
