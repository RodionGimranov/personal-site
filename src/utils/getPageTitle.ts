import type { RouteLocationNormalizedLoaded } from "vue-router";

import type { Locale } from "@/locales";
import { i18n } from "@/plugins/vue-i18n";
import { ALL_PROJECTS } from "@/data/projects";

export function getPageTitle(route: RouteLocationNormalizedLoaded, locale: Locale): string {
    const titleKey = route.meta.titleKey as string | undefined;

    if (!titleKey) {
        return "Rodion Gimranov";
    }

    const baseTitle = i18n.global.t(titleKey);

    const projectSlug = route.params.slug;

    if (!projectSlug) {
        return baseTitle;
    }

    const project = ALL_PROJECTS.find((p) => p.slug === projectSlug);

    if (project) {
        const projectName = project.i18n[locale]?.name;
        return projectName ? `${baseTitle} | ${projectName}` : baseTitle;
    }

    return baseTitle;
}
