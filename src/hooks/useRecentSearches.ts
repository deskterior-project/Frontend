import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchState {
  recent: string[];
  saveSearch: (term: string) => void;
  removeSearch: (term: string) => void;
  clearAll: () => void;
}

export const useRecentSearches = create<SearchState>()(
  persist(
    (set) => ({
      recent: [],

      saveSearch: (term) =>
        set((state) => {
          const trimmed = term.trim();
          if (!trimmed) return state;

          const updated = [
            trimmed,
            ...state.recent.filter((s) => s !== trimmed),
          ].slice(0, 10);

          return { recent: updated };
        }),

      removeSearch: (term) =>
        set((state) => ({
          recent: state.recent.filter((s) => s !== term),
        })),

      clearAll: () => set({ recent: [] }),
    }),
    {
      name: "recentSearches",
    },
  ),
);
