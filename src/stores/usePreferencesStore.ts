import { defineStore } from "pinia";
import { i18n } from "@/plugins/vue-i18n";
import type { Locale, Theme, SidebarMode } from "@/types/";

const LOCALE_KEY = "locale";
const THEME_KEY = "theme";
const SIDEBAR_KEY = "sidebar";

const INDEX_TO_LOCALE: Locale[] = ["ru", "en"];
const INDEX_TO_THEME: Theme[] = ["light", "dark", "system"];

export const usePreferencesStore = defineStore("preferences", {
    state: () => ({
        locale: "ru" as Locale,
        theme: "system" as Theme,
        sidebar: "expanded" as SidebarMode,
    }),

    getters: {
        currentLocale: (state) => state.locale,
        currentTheme: (state) => state.theme,

        localeIndex: (state) => INDEX_TO_LOCALE.indexOf(state.locale),
        themeIndex: (state) => INDEX_TO_THEME.indexOf(state.theme),

        isSidebarCollapsed: (state) => state.sidebar === "collapsed",
        isSidebarExpanded: (state) => state.sidebar === "expanded",
    },

    actions: {
        init() {
            const savedLocale = localStorage.getItem(LOCALE_KEY) as Locale | null;
            const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
            const savedLayout = localStorage.getItem(SIDEBAR_KEY) as SidebarMode | null;

            if (savedLocale) this.locale = savedLocale;
            if (savedTheme) this.theme = savedTheme;

            if (savedLayout === "expanded" || savedLayout === "collapsed") {
                this.sidebar = savedLayout;
            }

            i18n.global.locale.value = this.locale;
            this.applyTheme();

            const media = window.matchMedia("(prefers-color-scheme: dark)");

            media.addEventListener("change", () => {
                if (this.theme === "system") this.applyTheme();
            });
        },

        setLocale(locale: Locale) {
            if (this.locale === locale) return;
            this.locale = locale;
            i18n.global.locale.value = locale;
            localStorage.setItem(LOCALE_KEY, locale);
        },

        setLocaleByIndex(index: number) {
            const locale = INDEX_TO_LOCALE[index];
            if (locale) this.setLocale(locale);
        },

        toggleLocale() {
            const next = this.locale === "ru" ? "en" : "ru";
            this.setLocale(next);
        },

        setTheme(theme: Theme) {
            if (this.theme === theme) return;
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

        toggleSidebar() {
            const next: SidebarMode = this.sidebar === "expanded" ? "collapsed" : "expanded";

            this.sidebar = next;
            localStorage.setItem(SIDEBAR_KEY, next);
        },
    },
});
