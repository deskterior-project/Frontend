import type { Session, User } from "@supabase/supabase-js";
import { create } from "zustand";

interface AuthState {
    user: User | null;
    session: Session | null;
    isReady: boolean;
    setAuth: (session: Session | null) => void;
    setReady: (ready: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    session: null,
    isReady: false,
    setAuth: (session) => set({ session, user: session?.user ?? null }),
    setReady: (ready) => set({ isReady: ready }),
}));
