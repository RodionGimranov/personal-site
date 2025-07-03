import { createI18n } from "vue-i18n";

import global from "@/locales/global.json";

const i18n = createI18n({
    locale: "ru",
    fallbackLocale: "ru",
    silentTranslationWarn: true,
    messages: {
        ru: {
            message: {
                ...global.ru.message,
            },
        },
        en: {
            message: {
                ...global.en.message,
            },
        },
    },
});

export default i18n;
