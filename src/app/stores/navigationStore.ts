import create from "zustand";

interface NavigationState {
  clickedLink: string | null;
  setClickedLink: (link: string | null) => void;
}

const useNavigationStore = create<NavigationState>((set) => ({
  clickedLink: null,
  setClickedLink: (link) => set({ clickedLink: link }),
}));

export default useNavigationStore;
