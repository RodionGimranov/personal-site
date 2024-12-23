import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";

const routes = [
    { path: "/", redirect: "/Home" },
    {
        path: "/Home",
        name: "homePage",
        component: HomePage,
        meta: { title: "Rodion Gimranov" },
    },
    {
        path: "/About",
        name: "aboutPage",
        component: AboutPage,
        meta: { title: "About" },
    },
    {
        path: "/Projects",
        name: "projectsPage",
        component: ProjectsPage,
        meta: { title: "Projects" },
    },
];

const router = createRouter({
    history: createWebHistory("/personal-site/"),
    routes,
});

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const nearestWithTitle = to.matched.find((route) => route.meta && route.meta.title);

    document.title = nearestWithTitle ? nearestWithTitle.meta.title : "Rodion Gimranov";

    next();
});

export default router;
