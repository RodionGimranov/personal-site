import { createStore } from "vuex";

import modals from "@/store/modules/modals.js";
import theme from "@/store/modules/theme.js";

const version = "0.3.30";
const linesOfCode = 2608;

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
