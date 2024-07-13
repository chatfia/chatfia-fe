import { create } from "zustand";
import { UserInfoResponse } from "@/app/types/auth";

interface UserState {
  user: UserInfoResponse | null;
  isLoggedIn: boolean;
  logIn: (userData: UserInfoResponse) => void;
  logOut: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  logIn: (userData: UserInfoResponse) =>
    set({ user: userData, isLoggedIn: true }),
  logOut: () => set({ user: null, isLoggedIn: false }),
}));
