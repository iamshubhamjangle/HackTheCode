import { create } from "zustand";

export const useVoteStore = create((set) => ({
  votes: 1000,
  candidates: 545,
  incrementVote: () => set((state) => ({ ...state, votes: state.votes + 1 })),
}));
