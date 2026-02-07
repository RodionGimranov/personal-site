import type { RouteLocationNormalizedLoaded } from "vue-router";

import { i18n } from "@/plugins/vue-i18n";
import projects from "@/data/projects.json";
import type { Locale } from "@/locales";


export function getPageTitle(
    route: RouteLocationNormalizedLoaded,
    locale: Locale
): string {
    const titleKey = route.meta.titleKey as string | undefined;

    if (!titleKey) {
        return "Rodion Gimranov";
    }

    const baseTitle = i18n.global.t(titleKey);

    const projectId = route.params.id;
    if (!projectId) {
        return baseTitle;
    }

    const project = projects[locale]?.find(
        (p: { id: number | string; name: string }) =>
            String(p.id) === String(projectId)
    );

    if (project) {
        return `${baseTitle} | ${project.name}`;
    }

    return baseTitle;
}
