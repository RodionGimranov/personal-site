import { defineStore } from "pinia";
import i18n from "@/libs/vue-i18n/vue-i18n.js";

const STORAGE_KEY = "app-language";

export const useLanguageStore = defineStore("language", {
    state: () => ({
        language: localStorage.getItem(STORAGE_KEY) || "ru",
    }),

    actions: {
        init() {
            i18n.global.locale.value = this.language;
        },

        setLanguage(lang) {
            this.language = lang;
            localStorage.setItem(STORAGE_KEY, lang);
            i18n.global.locale.value = lang;
        },

        setByIndex(index) {
            const languages = ["ru", "en"];
            this.setLanguage(languages[index] || "ru");
        },
    },
});
