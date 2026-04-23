import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import type { Project, ProjectLocale } from "@/types";

// import passwordGenerator from "@/data/projects/password-generator.json";
import personalWebsite from "@/data/projects/personal-website.json";

const ALL_PROJECTS: Project[] = [personalWebsite as Project];

export const useProjectsStore = defineStore("projects", {
    state: () => ({}),

    getters: {
        allProjects(): Array<Project & { locale: ProjectLocale }> {
            const { locale } = useI18n();
            return ALL_PROJECTS.map((project) => ({
                ...project,
                locale: project.i18n[locale.value as "ru" | "en"] ?? project.i18n.en,
            }));
        },

        getProjectById(): (id: number) => (Project & { locale: ProjectLocale }) | null {
            const { locale } = useI18n();
            return (id: number) => {
                const project = ALL_PROJECTS.find((p) => p.id === id);
                if (!project) return null;
                return {
                    ...project,
                    locale: project.i18n[locale.value as "ru" | "en"] ?? project.i18n.en,
                };
            };
        },
    },

    actions: {
        openProject(id: number): void {
            const router = useRouter();
            router.push({ name: "aboutProjectPage", params: { id } });
        },
    },
});
