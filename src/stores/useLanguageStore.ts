import { defineStore } from "pinia";

import { i18n } from "@/plugins/vue-i18n";
import type { Locale } from "@/locales";

const STORAGE_KEY = "locale";
const INDEX_TO_LOCALE: Locale[] = ["ru", "en"];

export const useLanguageStore = defineStore("language", {
    state: () => ({
        locale: i18n.global.locale.value as Locale,
    }),

    getters: {
        currentLocale: (state) => state.locale,
    },

    actions: {
        setLocale(locale: Locale) {
            if (this.locale === locale) return;

            this.locale = locale;
            i18n.global.locale.value = locale;
            localStorage.setItem(STORAGE_KEY, locale);
        },

        setByIndex(index: number) {
            const locale = INDEX_TO_LOCALE[index];
            if (locale) {
                this.setLocale(locale);
            }
        },

        init() {
            const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
            if (savedLocale) {
                this.setLocale(savedLocale);
            }
        },
    },
});
