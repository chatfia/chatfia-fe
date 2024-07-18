import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo) => void;
}

interface UserInfo {
  id: number;
  email: string;
  nickname: string;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  userInfo: null,
  logIn: () => {
    console.log("로그인");
    set({ isLoggedIn: true });
  },
  logOut: () => {
    console.log("로그아웃");
    set({ isLoggedIn: false, userInfo: null });
  },
  setUserInfo: (userInfo: UserInfo) => {
    set({ userInfo });
  },
}));
