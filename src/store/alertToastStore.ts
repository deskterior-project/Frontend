import { create } from "zustand";

interface ToastOptions {
    firstMessage: string;
    secondMessage?: string;
    duration?: number;
}

interface AlertToastState {
    open: boolean;
    firstMessage: string;
    secondMessage: string;
    duration: number;
    alertToast: (options: ToastOptions) => void;
    closeAlertToast: () => void;
}

let hideTimer: ReturnType<typeof setTimeout> | null = null;

export const useAlertToast = create<AlertToastState>((set) => ({
    open: false,
    firstMessage: "",
    secondMessage: "",
    duration: 3000,
    alertToast: ({ firstMessage, secondMessage = "", duration = 3000 }) => {
        if (hideTimer) clearTimeout(hideTimer);

        set({ open: false });

        requestAnimationFrame(() => {
            set({ open: true, firstMessage, secondMessage, duration });

            hideTimer = setTimeout(() => {
                set({ open: false });
                hideTimer = null;
            }, duration);
        });
    },
    closeAlertToast: () => {
        if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
        }
        set({ open: false });
    },
}));
