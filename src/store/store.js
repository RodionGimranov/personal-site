import { createStore } from "vuex";

const version = "0.1.18";
const linesOfCode = 1470;

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
});
