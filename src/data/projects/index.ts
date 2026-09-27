import type { Project } from "@/types";

// import passwordGenerator from "@/data/projects/password-generator.json";
import personalWebsite from "@/data/projects/personal-website.json";
import suzdalfestOpenPremiere from "@/data/projects/suzdalfest-open-premiere.json";
import medmediaPro from "@/data/projects/medmedia-pro.json";

export const ALL_PROJECTS: Project[] = [
    personalWebsite as Project,
    suzdalfestOpenPremiere as Project,
    medmediaPro as Project,
];

export const PROJECTS_MAP_BY_SLUG = Object.fromEntries(ALL_PROJECTS.map((p) => [p.slug, p]));
