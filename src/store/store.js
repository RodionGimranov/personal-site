import { createStore } from "vuex";

import modals from "@/store/modules/modals.js";
import theme from "@/store/modules/theme.js";

const appVersion = "0.7.92";
const linesOfCode = 4968;
// +9
const fileCount = 83;
// +5
const folderCount = 35;
const projectSizeMB = 170.14;

const resumeLink = "https://drive.google.com/drive/folders/1xIWBnyshRjCosq57ADyIZSv7d8wflI48?";

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
            resumeLink,
        };
    },
    getters: {
        getAppVersion: (state) => state.appVersion,
        getLinesOfCode: (state) => state.linesOfCode,
        getFileCount: (state) => state.fileCount,
        getFolderCount: (state) => state.folderCount,
        getProjectSizeMB: (state) => state.projectSizeMB,
        getResumeLink: (state) => state.resumeLink,
    },
});
