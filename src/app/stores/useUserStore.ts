import { create } from "zustand";

export interface UserState {
  loggedIn: boolean;
  nickname: string;
  email: string;
  setUserInfo: (nickname: string, email: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  loggedIn: false,
  nickname: "",
  email: "",
  setUserInfo: (nickname, email) => set({ nickname, email }),
}));
