import { create } from "zustand";
import { includeChromeStore } from "zustand-chrome-local-storage";

export const useCountStore = create(
  includeChromeStore((set: any, get: any) => ({
    count: 0,
    increaseCount: () => set({ count: get().count + 1 }),
  }))
);
