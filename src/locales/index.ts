import ruGlobal from "./ru/global.json";
import ruAbout from "./ru/about.json";
import ruHome from "./ru/home.json";
import ruProjectsLocale from "./ru/projectsLocale.json";

import enGlobal from "./en/global.json";
import enAbout from "./en/about.json";
import enHome from "./en/home.json";
import enProjectsLocale from "./en/projectsLocale.json";

export const messages = {
    ru: {
        global: ruGlobal,
        about: ruAbout,
        home: ruHome,
        projectsLocale: ruProjectsLocale,
    },
    en: {
        global: enGlobal,
        about: enAbout,
        home: enHome,
        projectsLocale: enProjectsLocale,
    },
};

export type Locale = keyof typeof messages;
