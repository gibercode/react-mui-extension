import { create } from 'zustand';
// import { includeChromeStore } from "zustand-chrome-local-storage";

type CountState = {
  count: number;
  increaseCount: () => void;
};

export const useCountStore = create<CountState>((set, get) => ({
  count: 0,
  increaseCount: () => set({ count: get().count + 1 }),
}));

//PERSIST CONFIG
// import { create } from "zustand";
// import { includeChromeStore } from "zustand-chrome-local-storage";

// type CountState = {
//   count: number;
//   increaseCount: () => void;
// };

// export const useCountStore = create<CountState>(
//   includeChromeStore((set, get) => ({
//     count: 0,
//     increaseCount: () => set({ count: get().count + 1 }),
//   }))
// );
