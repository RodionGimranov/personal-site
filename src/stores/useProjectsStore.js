import { defineStore } from "pinia";
import projectsData from "@/data/projects.json";

export const useProjectsStore = defineStore("projects", {
    state: () => ({
        locale: "ru",
        selectedProjectId: null,
    }),

    getters: {
        projects(state) {
            return projectsData[state.locale] || [];
        },

        getProjectById: (state) => {
            return (id) => {
                return (
                    projectsData[state.locale]?.find((project) => project.id === Number(id)) || null
                );
            };
        },

        getProjectsByIds: (state) => {
            return (ids = []) => {
                return (
                    projectsData[state.locale]?.filter((project) => ids.includes(project.id)) || []
                );
            };
        },

        selectedProject(state) {
            if (state.selectedProjectId === null) return null;

            return (
                projectsData[state.locale]?.find(
                    (project) => project.id === state.selectedProjectId,
                ) || null
            );
        },
    },

    actions: {
        setLocale(locale) {
            this.locale = locale;
        },

        selectProjectById(id) {
            this.selectedProjectId = Number(id);
        },

        clearSelectedProject() {
            this.selectedProjectId = null;
        },
    },
});
