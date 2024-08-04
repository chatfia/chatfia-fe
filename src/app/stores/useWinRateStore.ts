import { create } from "zustand";

export interface WinRate {
  wins: number;
  losses: number;
  mafiaWins: number;
  mafiaLosses: number;
  policeWins: number;
  policeLosses: number;
  doctorWins: number;
  doctorLosses: number;
  citizenWins: number;
  citizenLosses: number;
}

export interface WinRateState {
  winRate: WinRate;
  setWinRate: (winRate: WinRate) => void;
}

export const useWinRateStore = create<WinRateState>((set) => ({
  winRate: {
    wins: 0,
    losses: 0,
    mafiaWins: 0,
    mafiaLosses: 0,
    policeWins: 0,
    policeLosses: 0,
    doctorWins: 0,
    doctorLosses: 0,
    citizenWins: 0,
    citizenLosses: 0,
  },
  setWinRate: (winRate: WinRate) => set({ winRate }),
}));
