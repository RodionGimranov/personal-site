import { createApp, watch } from "vue";
import { formatText } from "@/utils/formatters.js";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store/store.js";
import i18n from "@/libs/vue-i18n/vue-i18n.js";

const app = createApp(App);

app.config.globalProperties.$filters = {
    formatText,
};

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const titleKey = to.meta.titleKey;
    if (titleKey) {
        document.title = i18n.global.t(titleKey);
    } else {
        document.title = "Rodion Gimranov";
    }

    next();
});

watch(
    () => i18n.global.locale.value,
    () => {
        const titleKey = router.currentRoute.value.meta.titleKey;
        if (titleKey) {
            document.title = i18n.global.t(titleKey);
        }
    },
);

app.use(router).use(store).use(i18n);

app.mount("#app");
