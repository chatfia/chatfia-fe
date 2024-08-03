import { create } from "zustand";

interface ArrowUpState {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export const useArrowUpStore = create<ArrowUpState>((set) => ({
  isVisible: false,
  setIsVisible: (visible) => set({ isVisible: visible }),
}));
