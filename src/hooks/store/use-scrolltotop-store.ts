import { create } from "zustand";

type State = {
  isVisible: boolean;
};

type Action = {
  setIsVisible: (visible: boolean) => void;
};

export const useScrollToTopStore = create<State & Action>((set) => ({
  isVisible: false,
  setIsVisible: (visible: boolean) => set({ isVisible: visible }),
}));
