export type ProjectType = "personal_project" | "commercial_project";

export type ProjectMeta = {
    link_to_deploy: string;
    link_to_code: string;
    project_video_cover: string;
    project_large_icon: string;
};

export type ProjectKeyFeature = {
    feature: string;
};

export type ProjectMetric = {
    label: string;
    value: number;
};

export type ProjectResults = {
    text: string;
    metrics?: ProjectMetric[];
};

export type ProjectLocale = {
    name: string;
    overview: string;
    purpose: string;
    key_features: ProjectKeyFeature[];
    role: string;
    contribution: string;
    results: ProjectResults;
    last_data_update: string;
};

export type ProjectI18n = {
    ru: ProjectLocale;
    en: ProjectLocale;
};

export type Project = {
    id: number;
    slug: string;
    type: ProjectType;
    meta: ProjectMeta;
    technologies: string[];
    i18n: ProjectI18n;
};
