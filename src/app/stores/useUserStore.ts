import { create } from "zustand";

interface UserState {
  nickname: string | null;
  email: string | null;
  setUserInfo: (nickname: string, email: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  nickname: null,
  email: null,
  setUserInfo: (nickname, email) => set({ nickname, email }),
}));
