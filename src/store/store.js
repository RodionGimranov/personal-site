import { createStore } from "vuex";

import modals from "@/store/modules/modals.js";
import theme from "@/store/modules/theme.js";

const version = "0.3.27";
const linesOfCode = 2573;

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
