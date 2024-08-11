import { create } from "zustand";

interface PasswordState {
  error: string | null;
  setError: (error: string | null) => void;
}

export const usePasswordStore = create<PasswordState>((set) => ({
  error: null,
  setError: (error) => set({ error }),
}));
