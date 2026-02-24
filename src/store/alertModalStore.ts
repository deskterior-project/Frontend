import { ReactNode } from "react";
import { create } from "zustand";

interface ModalAction {
  label: ReactNode;
  variant?: "primary" | "secondary" | "success" | "error";
  onClick?: () => void;
}

interface ModalOptions {
  message: string;
  actions: ModalAction[];
}

interface AlertModalState {
  message: string;
  actions: ModalAction[];
  alertModal: (options: ModalOptions) => void;
  clearAlertModal: () => void;
}

export const useAlertModal = create<AlertModalState>((set) => ({
  message: "",
  actions: [],
  alertModal: ({ message, actions }) =>
    set({
      message,
      actions: actions.map((action) => ({
        ...action,
        variant: action.variant ?? "primary",
      })),
    }),
  clearAlertModal: () => set({ message: "", actions: [] }),
}));
