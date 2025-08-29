import { createI18n } from "vue-i18n";

import global from "@/locales/global.json";
import home from "@/locales/pages/home.json";
import projectsLocale from "@/locales/pages/projectsLocale.json";
import about from "@/locales/pages/about.json";

import changelogs from "@/data/changelogs.json";
import projects from "@/data/projects.json";

const i18n = createI18n({
    legacy: false,
    locale: "ru",
    fallbackLocale: "ru",
    silentTranslationWarn: true,
    messages: {
        ru: {
            message: {
                ...global.ru.message,
                ...home.ru.message,
                ...projectsLocale.ru.message,
                ...about.ru.message,
                ...changelogs.ru.message,
                ...projects.ru.message,
            },
        },
        en: {
            message: {
                ...global.en.message,
                ...home.en.message,
                ...projectsLocale.en.message,
                ...about.en.message,
                ...changelogs.en.message,
                ...projects.en.message,
            },
        },
    },
});

export default i18n;
