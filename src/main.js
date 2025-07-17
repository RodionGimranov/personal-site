import { createApp } from "vue";
import { formatText } from "@/utils/formatters.js";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store/store.js";
import i18n from "@/libs/vue-i18n/vue-i18n.js";

const app = createApp(App);

app.config.globalProperties.$filters = {
    formatText,
};

app.use(router).use(store).use(i18n);

app.mount("#app");
