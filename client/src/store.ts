import { create } from "zustand";

interface CubeStore {
  numbers: number[];
  setNumbers: (numbers: number[]) => void;
}

export const useStore = create<CubeStore>((set) => ({
  numbers: [3, 5, 2, 4],
  setNumbers: (numbers) => set({ numbers }),
}));
