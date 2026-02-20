import { defineStore } from "pinia";

import { i18n } from "@/plugins/vue-i18n";
import type { Locale, Theme } from "@/types/";

const LOCALE_KEY = "locale";
const THEME_KEY = "theme";

const INDEX_TO_LOCALE: Locale[] = ["ru", "en"];
const INDEX_TO_THEME: Theme[] = ["light", "dark", "system"];

export const usePreferencesStore = defineStore("preferences", {
    state: () => ({
        locale: i18n.global.locale.value as Locale,
        theme: "system" as Theme,
    }),

    getters: {
        currentLocale: (state) => state.locale,
        currentTheme: (state) => state.theme,
    },

    actions: {
        setLocale(locale: Locale) {
            if (this.locale === locale) return;

            this.locale = locale;
            i18n.global.locale.value = locale;
            localStorage.setItem(LOCALE_KEY, locale);
        },

        setByIndex(index: number) {
            const locale = INDEX_TO_LOCALE[index];
            if (locale) {
                this.setLocale(locale);
            }
        },

        setTheme(theme: Theme) {
            this.theme = theme;
            localStorage.setItem(THEME_KEY, theme);
            this.applyTheme();
        },

        setThemeByIndex(index: number) {
            const theme = INDEX_TO_THEME[index];
            if (theme) this.setTheme(theme);
        },

        applyTheme() {
            const root = document.documentElement;
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

            const isDark = this.theme === "dark" || (this.theme === "system" && prefersDark);

            root.classList.toggle("dark", isDark);
        },

        init() {
            const media = window.matchMedia("(prefers-color-scheme: dark)");

            const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
            if (savedTheme) {
                this.theme = savedTheme;
            }

            this.applyTheme();

            media.addEventListener("change", () => {
                if (this.theme === "system") {
                    this.applyTheme();
                }
            });
        },
    },
});
