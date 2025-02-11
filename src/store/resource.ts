import { create } from 'zustand';

// Definir el store
interface FontSizeStore {
  fontSize: string;
  setGlobalFontSize: (size: string) => void;
}

export const useFontSizeStore = create<FontSizeStore>((set) => ({
  fontSize: '0.75em',
  setGlobalFontSize: (fontSize) => {
    set({ fontSize });
  },
}));
