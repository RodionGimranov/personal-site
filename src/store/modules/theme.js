export default {
    state: {
        theme: localStorage.getItem("theme") || "light",
    },
    mutations: {
        SET_THEME(state, theme) {
            state.theme = theme;
            localStorage.setItem("theme", theme);

            if (theme === "system") {
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
                document.documentElement.setAttribute("data-theme", systemTheme);
            } else {
                document.documentElement.setAttribute("data-theme", theme);
            }
        },
    },
    actions: {
        toggleTheme({ commit, state }) {
            const newTheme = state.theme === "light" ? "dark" : "light";
            commit("SET_THEME", newTheme);
        },
    },
    getters: {
        currentTheme: (state) => state.theme,
    },
};
