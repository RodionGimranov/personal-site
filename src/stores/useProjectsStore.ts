import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

import type { Project, ProjectLocale } from "@/types";
import { ALL_PROJECTS } from "@/data/projects";
import { usePreferencesStore } from "@/stores/usePreferencesStore";

export const useProjectsStore = defineStore("projects", {
    state: () => ({}),

    getters: {
        allProjects(): Array<Project & { locale: ProjectLocale }> {
            const preferencesStore = usePreferencesStore();

            return ALL_PROJECTS.map((project) => ({
                ...project,

                locale: project.i18n[preferencesStore.locale as "ru" | "en"] ?? project.i18n.en,
            }));
        },

        getProjectBySlug(): (slug: string) => (Project & { locale: ProjectLocale }) | null {
            const { locale } = useI18n();

            return (slug: string) => {
                const project = ALL_PROJECTS.find((p) => p.slug === slug);

                if (!project) return null;

                return {
                    ...project,

                    locale: project.i18n[locale.value as "ru" | "en"] ?? project.i18n.en,
                };
            };
        },
    },

    actions: {},
});
