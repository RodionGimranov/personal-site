import { createStore } from "vuex";

import modals from "@/store/modules/modals.js";
import theme from "@/store/modules/theme.js";

const appVersion = "0.5.153";
const linesOfCode = 4340;
// +9
const fileCount = 78;
const folderCount = 29;
const projectSizeMB = 88.05;

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
