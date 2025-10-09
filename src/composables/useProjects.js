import { computed } from "vue";
import { useI18n } from "vue-i18n";

import projects from "@/data/projects.json";

export function useProjects() {
    const { locale } = useI18n();

    const projectsList = computed(() => {
        return [...(projects[locale.value] || [])].sort((a, b) => b.id - a.id);
    });

    function getProjectsByIds(ids) {
        return projectsList.value.filter((p) => ids.includes(p.id));
    }

    return {
        projectsList,
        getProjectsByIds,
    };
}
