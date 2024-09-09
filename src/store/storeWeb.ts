import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CountState {
  count: number;
  increaseCount: () => void;
}

export const useCountStore = create<CountState>()(
  persist(
    (set) => ({
      count: 0,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: 'count',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
