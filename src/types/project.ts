export type ProjectAreaOfResponsibility = {
    area: string;
};

export type ProjectMeta = {
    project_video_cover: string;
    link_to_deploy: string;
    link_to_code: string;
};

export type ProjectLocale = {
    name: string;
    description: string;
    role: string;
    areas_of_responsibility: ProjectAreaOfResponsibility[];
    context_purpose: string;
};

export type ProjectI18n = {
    ru: ProjectLocale;
    en: ProjectLocale;
};

export type Project = {
    id: number;
    slug: string;
    meta: ProjectMeta;
    technologies: string[];
    i18n: ProjectI18n;
};
