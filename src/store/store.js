import { createStore } from "vuex";

import layout from "@/store/modules/layout.js";
import theme from "@/store/modules/theme.js";

const appVersion = "1.0.47";
const linesOfCode = 5659;
// +11
const fileCount = 90;
// +5
const folderCount = 35;
const projectSizeMB = 292.59;

const resumeLink = "https://drive.google.com/drive/folders/1xIWBnyshRjCosq57ADyIZSv7d8wflI48?";
const figmaDesignLink =
    "https://www.figma.com/design/XwsuylKvqDHavXARZ4gBpH/Rodion-Gimranov-%7C-UI-Kit-%E2%80%93-Public?node-id=0-1&t=DXsPhWGaJGQXnwf6-1";

export default createStore({
    modules: {
        layout,
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
            figmaDesignLink,
        };
    },
    getters: {
        getAppVersion: (state) => state.appVersion,
        getLinesOfCode: (state) => state.linesOfCode,
        getFileCount: (state) => state.fileCount,
        getFolderCount: (state) => state.folderCount,
        getProjectSizeMB: (state) => state.projectSizeMB,
        getResumeLink: (state) => state.resumeLink,
        getFigmaDesignLink: (state) => state.figmaDesignLink,
    },
});
