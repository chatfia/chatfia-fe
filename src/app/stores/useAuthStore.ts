import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
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
    set({ isLoggedIn: false });
  },
}));
