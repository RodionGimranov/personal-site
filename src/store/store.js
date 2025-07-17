import { createStore } from "vuex";

// import collections from "./modules/collections.js";

const version = "0.1.11";
const linesOfCode = 1107;

export default createStore({
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
    modules: {
        // collections,
    },
});
