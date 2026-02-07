import { defineStore } from "pinia";
import projectsDataJson from "@/data/projects.json";

import type { Project } from "@/types/project";

type Locale = "ru" | "en";

type ProjectsData = Record<Locale, Project[]>;

const projectsData = projectsDataJson as ProjectsData;

type ProjectsState = {
    locale: Locale;
    selectedProjectId: number | null;
};

export const useProjectsStore = defineStore("projects", {
    state: (): ProjectsState => ({
        locale: "ru",
        selectedProjectId: null,
    }),

    getters: {
        projects(state): Project[] {
            const list = projectsData[state.locale] ?? [];
            return [...list].sort((a, b) => b.id - a.id);
        },

        getProjectById: (state) => {
            return (id: number | string): Project | null => {
                const numericId = Number(id);

                return (
                    projectsData[state.locale]?.find((project) => project.id === numericId) ?? null
                );
            };
        },

        getProjectsByIds: (state) => {
            return (ids: number[] = []): Project[] => {
                const list = projectsData[state.locale] ?? [];

                const map = new Map<number, Project>(list.map((project) => [project.id, project]));

                return ids.map((id) => map.get(id)).filter((p): p is Project => p !== undefined);
            };
        },

        selectedProject(state): Project | null {
            if (state.selectedProjectId === null) return null;

            return (
                projectsData[state.locale]?.find(
                    (project) => project.id === state.selectedProjectId,
                ) ?? null
            );
        },
    },

    actions: {
        setLocale(locale: Locale): void {
            this.locale = locale;
        },

        selectProjectById(id: number | string): void {
            this.selectedProjectId = Number(id);
        },
    },
});
