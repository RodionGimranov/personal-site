export type ProjectAreaOfResponsibility = {
    area: string;
};

export type ProjectTechnology = {
    name: string;
};

export type Project = {
    id: number;
    name: string;
    description: string;
    role: string;
    areas_of_responsibility: ProjectAreaOfResponsibility[];
    context_purpose: string;
    technologies: ProjectTechnology[];
    project_video_cover: string;
    link_to_deploy: string;
    link_to_code: string;
};
