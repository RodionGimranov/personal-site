import { createApp, watch } from "vue";
import type { RouteLocationNormalizedLoaded } from "vue-router";

import App from "@/App.vue";
import { pinia } from "@/plugins/pinia";
import router from "@/router";
import { i18n } from "@/plugins/vue-i18n";

import { getPageTitle } from "@/utils/getPageTitle";
import { useLanguageStore } from "@/stores/useLanguageStore";

import "./assets/tailwind.css";

const app = createApp(App);

app.use(pinia);

const languageStore = useLanguageStore();
languageStore.init();

router.beforeEach((to: RouteLocationNormalizedLoaded) => {
    window.scrollTo({ top: 0, behavior: "instant" });

    document.title = getPageTitle(to, languageStore.currentLocale);

    return true;
});

watch(
    () => languageStore.currentLocale,
    (locale) => {
        document.title = getPageTitle(router.currentRoute.value, locale);
    },
);

app.use(router);
app.use(i18n);

app.mount("#app");
