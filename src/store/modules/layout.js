export default {
    namespaced: true,
    state: () => ({
        isSidebarOpen: false,
        isChangelogModalOpen: false,
        isBackgroundModalOpen: false,
    }),
    mutations: {
        OPEN_SIDEBAR(state) {
            state.isSidebarOpen = true;
        },
        CLOSE_SIDEBAR(state) {
            state.isSidebarOpen = false;
        },
        TOGGLE_SIDEBAR(state) {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        OPEN_CHANGELOG_MODAL(state) {
            state.isChangelogModalOpen = true;
        },
        CLOSE_CHANGELOG_MODAL(state) {
            state.isChangelogModalOpen = false;
        },
        OPEN_BACKGROUND_MODAL(state) {
            state.isBackgroundModalOpen = true;
        },
        CLOSE_BACKGROUND_MODAL(state) {
            state.isBackgroundModalOpen = false;
        },
    },
};
