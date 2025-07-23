// src/store.js
import { create } from 'zustand';

// Create a Zustand store using the 'create' function
// The store here manages a simple counter state with actions to increase and reset the counter.
const useStore = create((set) => ({
  count: 0,                 // The state variable to hold count
  increase: () => set((state) => ({ count: state.count + 1 })), // Action to increase count
  reset: () => set({ count: 0 }),  // Action to reset count to zero
}));

export default useStore;
