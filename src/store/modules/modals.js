export default {
    namespaced: true,
    state: () => ({
        isChangelogModalOpen: false,
    }),
    mutations: {
        OPEN_CHANGELOG_MODAL(state) {
            state.isChangelogModalOpen = true;
        },
        CLOSE_CHANGELOG_MODAL(state) {
            state.isChangelogModalOpen = false;
        },
    },
};
