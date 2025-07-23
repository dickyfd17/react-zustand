// src/storeAuth.js
import { create } from 'zustand';

// Zustand store to manage authentication status and user info
const useAuthStore = create((set) => ({
  user: null, // null means not logged in

  // Login action, setting user data
  login: (userData) => set({ user: userData }),

  // Logout action, clearing user data
  logout: () => set({ user: null }),
}));

export default useAuthStore;
