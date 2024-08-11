import { create } from "zustand";

interface AuthState {
  isSuccess: boolean;
  setIsSuccess: (isSuccess: boolean) => void;
  logIn: () => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isSuccess: false,
  setIsSuccess: (isSuccess) => set({ isSuccess }),
  logIn: () => set({ isSuccess: true }),
  logOut: () => set({ isSuccess: false }),
}));
