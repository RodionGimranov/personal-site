import { createApp, watch } from "vue";
import type { RouteLocationNormalizedLoaded } from "vue-router";

import App from "@/App.vue";
import { pinia } from "@/plugins/pinia";
import router from "@/router";
import { i18n } from "@/plugins/vue-i18n";

import { getPageTitle } from "@/utils/getPageTitle";
import { usePreferencesStore } from "@/stores/usePreferencesStore";

import "./assets/tailwind.css";

const app = createApp(App);

app.use(pinia);

const preferencesStore = usePreferencesStore();
preferencesStore.init();

router.beforeEach((to: RouteLocationNormalizedLoaded) => {
    document.title = getPageTitle(to, preferencesStore.currentLocale);

    return true;
});

watch(
    () => preferencesStore.currentLocale,
    (locale) => {
        document.title = getPageTitle(router.currentRoute.value, locale);
    },
);

app.use(router);
app.use(i18n);

app.mount("#app");
