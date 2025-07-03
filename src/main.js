import { createApp } from "vue";

import App from "./App.vue";
import router from "@/router";
import store from "@/store/store.js";
import i18n from "@/libs/vue-i18n/vue-i18n.js";

createApp(App).use(router).use(store).use(i18n).mount("#app");
