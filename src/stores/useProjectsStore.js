import { defineStore } from "pinia";
import projectsData from "@/data/projects.json";

export const useProjectsStore = defineStore("projects", {
    state: () => ({
        locale: "ru",
        selectedProjectId: null,
    }),

    getters: {
        projects(state) {
            const list = projectsData[state.locale] || [];
            return [...list].sort((a, b) => b.id - a.id);
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
                const list = projectsData[state.locale] || [];

                const map = new Map(list.map((project) => [project.id, project]));

                return ids.map((id) => map.get(id)).filter(Boolean);
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
    },
});
