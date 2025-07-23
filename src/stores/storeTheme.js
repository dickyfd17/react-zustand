// src/storeTheme.js
import { create } from 'zustand';

// Zustand store to manage application theme
const useThemeStore = create((set) => ({
  theme: 'light', // default theme

  // Toggle between light and dark theme
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
}));

export default useThemeStore;
