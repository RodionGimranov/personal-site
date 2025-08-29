import { createStore } from "vuex";

import modals from "@/store/modules/modals.js";
import theme from "@/store/modules/theme.js";

const appVersion = "0.3.70";
const linesOfCode = 3428;
const fileCount = 58;
const folderCount = 26;
const projectSizeMB = 87.42;

export default createStore({
    modules: {
        modals,
        theme,
    },
    state() {
        return {
            appVersion,
            linesOfCode,
            fileCount,
            folderCount,
            projectSizeMB,
        };
    },
    getters: {
        getAppVersion: (state) => state.appVersion,
        getLinesOfCode: (state) => state.linesOfCode,
        getFileCount: (state) => state.fileCount,
        getFolderCount: (state) => state.folderCount,
        getProjectSizeMB: (state) => state.projectSizeMB,
    },
});
