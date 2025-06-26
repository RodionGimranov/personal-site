import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/", redirect: "/Home" },
    {
        path: "/Home",
        name: "homePage",
        component: () => import("@/views/HomePage.vue"),
        meta: { title: "Rodion Gimranov" },
    },
    {
        path: "/AboutMe",
        name: "aboutMePage",
        component: () => import("@/views/AboutMePage.vue"),
        meta: { title: "About Me" },
    },
    {
        path: "/Prolects",
        name: "projectsPage",
        component: () => import("@/views/ProjectsPage.vue"),
        meta: { title: "Projects" },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const nearestWithTitle = to.matched.find((route) => route.meta && route.meta.title);

    document.title = nearestWithTitle ? nearestWithTitle.meta.title : "Rodion Gimranov";

    next();
});

export default router;
