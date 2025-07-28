import { createI18n } from "vue-i18n";

import global from "@/locales/global.json";
import home from "@/locales/pages/home.json";
import projects from "@/locales/pages/projects.json";

import changelogData from "@/data/changelogData.json";
import projectsData from "@/data/projectsData.json";

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
                ...projects.ru.message,
                ...changelogData.ru.message,
                // ...projectsData.ru.message,
            },
        },
        en: {
            message: {
                ...global.en.message,
                ...home.en.message,
                ...projects.en.message,
                ...changelogData.en.message,
                // ...projectsData.en.message,
            },
        },
    },
});

export default i18n;
