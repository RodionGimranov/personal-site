export default {
    namespaced: true,
    state: () => ({
        isChangelogModalOpen: false,
        isBackgroundModalOpen: false,
    }),
    mutations: {
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
