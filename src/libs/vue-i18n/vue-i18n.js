import { createI18n } from "vue-i18n";

import global from "@/locales/global.json";
import home from "@/locales/pages/home.json";
import projects from "@/locales/pages/projects.json";

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
            },
        },
        en: {
            message: {
                ...global.en.message,
                ...home.en.message,
                ...projects.en.message,
            },
        },
    },
});

export default i18n;
