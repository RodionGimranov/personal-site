import type { RouteLocationNormalizedLoaded } from "vue-router";

import type { Locale } from "@/locales";
import { i18n } from "@/plugins/vue-i18n";

import passwordGenerator from "@/data/projects/password-generator.json";
import personalWebsite from "@/data/projects/personal-website.json";

const ALL_PROJECTS = [passwordGenerator, personalWebsite];

export function getPageTitle(route: RouteLocationNormalizedLoaded, locale: Locale): string {
    const titleKey = route.meta.titleKey as string | undefined;

    if (!titleKey) {
        return "Rodion Gimranov";
    }

    const baseTitle = i18n.global.t(titleKey);

    const projectId = route.params.id;
    if (!projectId) {
        return baseTitle;
    }

    const project = ALL_PROJECTS.find((p) => String(p.id) === String(projectId));

    if (project) {
        const projectName = project.i18n[locale]?.name;
        return projectName ? `${baseTitle} | ${projectName}` : baseTitle;
    }

    return baseTitle;
}
