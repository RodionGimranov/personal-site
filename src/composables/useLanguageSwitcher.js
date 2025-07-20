import { useI18n } from "vue-i18n";

const langMap = {
    Ru: "ru",
    En: "en",
};

export function useLanguageSwitcher() {
    const { locale } = useI18n();

    function switchLanguageByTab(textOptions, index) {
        const selectedText = textOptions[index];
        if (langMap[selectedText]) {
            locale.value = langMap[selectedText];
        }
    }

    return { switchLanguageByTab };
}
