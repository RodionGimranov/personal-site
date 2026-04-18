import ruGlobal from "./ru/global.json";
import ruHome from "./ru/home.json";
import ruAbout from "./ru/about.json";
import ruProjects from "./ru/projects.json";

import enGlobal from "./en/global.json";
import enHome from "./en/home.json";
import enAbout from "./en/about.json";
import enProjects from "./en/projects.json";

export const messages = {
    ru: {
        global: ruGlobal,
        home: ruHome,
        about: ruAbout,
        projectsLocale: ruProjects,
    },
    en: {
        global: enGlobal,
        home: enHome,
        about: enAbout,
        projectsLocale: enProjects,
    },
};

export type Locale = keyof typeof messages;
