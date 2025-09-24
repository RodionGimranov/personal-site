import i18n from "@/libs/vue-i18n/vue-i18n.js";
import projects from "@/data/projects.json";

export function getPageTitle(route, locale) {
    const titleKey = route.meta.titleKey;
    if (!titleKey) return "Rodion Gimranov";

    let baseTitle = i18n.global.t(titleKey);

    if (route.params.id) {
        const project = projects[locale].find((p) => String(p.id) === String(route.params.id));

        if (project) {
            return `${baseTitle} | ${project.name}`;
        }
    }

    return baseTitle;
}
