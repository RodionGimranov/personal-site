import { createApp, watch } from "vue";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store/store.js";
import i18n from "@/libs/vue-i18n/vue-i18n.js";

import { getPageTitle } from "@/utils/getPageTitle.js";

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

app.use(router).use(store).use(i18n);

app.mount("#app");
