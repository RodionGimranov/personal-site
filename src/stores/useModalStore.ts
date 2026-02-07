import { defineStore } from "pinia";

export type ModalName = "changelog";

export type ModalsState = Record<ModalName, boolean>;

export const useModalStore = defineStore("modal", {
    state: (): { modals: ModalsState } => ({
        modals: {
            changelog: false,
        },
    }),

    getters: {
        isOpen:
            (state) =>
            (name: ModalName): boolean => {
                return state.modals[name];
            },
    },

    actions: {
        open(name: ModalName) {
            this.modals[name] = true;
        },

        close(name: ModalName) {
            this.modals[name] = false;
        },

        toggle(name: ModalName) {
            this.modals[name] = !this.modals[name];
        },

        closeAll() {
            (Object.keys(this.modals) as ModalName[]).forEach((key) => {
                this.modals[key] = false;
            });
        },
    },
});
