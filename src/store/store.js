import { createStore } from "vuex";

import modals from "@/store/modules/modals.js";
import theme from "@/store/modules/theme.js";

const version = "0.2.8";
const linesOfCode = 1952;

export default createStore({
    modules: {
        modals,
        theme,
    },
    state() {
        return {
            version,
            linesOfCode,
        };
    },
    getters: {
        appVersion: (state) => state.version,
        linesOfCode: (state) => state.linesOfCode,
    },
});
