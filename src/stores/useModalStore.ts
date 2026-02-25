import { defineStore } from "pinia";

export type ModalName = "changelog" | "shortcuts";

export type ModalsState = Record<ModalName, boolean>;

export const useModalStore = defineStore("modal", {
    state: (): { modals: ModalsState } => ({
        modals: {
            changelog: false,
            shortcuts: false,
        },
    }),

    getters: {
        isOpen:
            (state) =>
            (name: ModalName): boolean => {
                return state.modals[name];
            },

        isAnyOpen: (state): boolean => Object.values(state.modals).some(Boolean),
    },

    actions: {
        open(name: ModalName) {
            this.modals[name] = true;
        },

        close(name: ModalName) {
            this.modals[name] = false;
        },
    },
});
