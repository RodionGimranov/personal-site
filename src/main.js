import { createApp, watch } from "vue";

import App from "@/App.vue";
import { pinia } from "@/plugins/pinia";
import router from "@/router";
import i18n from "@/libs/vue-i18n/vue-i18n.js";

import { getPageTitle } from "@/utils/getPageTitle.js";
import { useLanguageStore } from "@/stores/useLanguageStore";

import "./assets/tailwind.css";

const app = createApp(App);

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = getPageTitle(to, i18n.global.locale.value);
    next();
});

watch(
    () => i18n.global.locale.value,
    (locale) => {
        document.title = getPageTitle(router.currentRoute.value, locale);
    },
);

app.use(pinia).use(router).use(i18n);

const languageStore = useLanguageStore();
languageStore.init();

app.mount("#app");
