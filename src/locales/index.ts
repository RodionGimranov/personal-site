import ruGlobal from "./ru/global.json";
import ruHome from "./ru/home.json";
import ruAbout from "./ru/about.json";
import ruProjectsLocale from "./ru/projects.locale.json";

import enGlobal from "./en/global.json";
import enHome from "./en/home.json";
import enAbout from "./en/about.json";
import enProjectsLocale from "./en/projects.locale.json";

export const messages = {
    ru: {
        global: ruGlobal,
        home: ruHome,
        about: ruAbout,
        projectsLocale: ruProjectsLocale,
    },
    en: {
        global: enGlobal,
        home: enHome,
        about: enAbout,
        projectsLocale: enProjectsLocale,
    },
};

export type Locale = keyof typeof messages;
