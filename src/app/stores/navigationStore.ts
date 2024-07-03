import { create } from "zustand";

interface NavigationState {
  clickedLink: string | null;
  setClickedLink: (link: string | null) => void;
}

export const navigationStore = create<NavigationState>((set) => ({
  clickedLink: null,
  setClickedLink: (link) => set({ clickedLink: link }),
}));
