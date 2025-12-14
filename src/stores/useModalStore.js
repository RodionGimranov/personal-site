import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
    state: () => ({
        modals: {
            changelog: false,
        },
    }),

    getters: {
        isOpen: (state) => (name) => {
            return Boolean(state.modals[name]);
        },
    },

    actions: {
        open(name) {
            if (this.modals[name] === undefined) return;
            this.modals[name] = true;
        },

        close(name) {
            if (this.modals[name] === undefined) return;
            this.modals[name] = false;
        },

        toggle(name) {
            if (this.modals[name] === undefined) return;
            this.modals[name] = !this.modals[name];
        },

        closeAll() {
            Object.keys(this.modals).forEach((key) => {
                this.modals[key] = false;
            });
        },
    },
});
