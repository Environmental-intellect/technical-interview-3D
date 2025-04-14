import { create } from "zustand";

interface CubeStore {
  inputValue: string;
  setInputValue: (string: string) => void;
}

export const useStore = create<CubeStore>((set) => ({
  inputValue: "",
  setInputValue: (inputValue) => set({ inputValue }),
}));
