import { create } from "zustand";

type Focus = "HERO" | "SYSTEM";

interface UniverseState {
  currentFocus: Focus;
  setFocus: (focus: Focus) => void;
}

export const useUniverseStore = create<UniverseState>((set) => ({
  currentFocus: "HERO",
  setFocus: (focus) => set({ currentFocus: focus }),
}));
