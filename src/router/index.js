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
        path: "/About",
        name: "aboutPage",
        component: () => import("@/views/AboutPage.vue"),
        meta: { title: "About" },
    },
    {
        path: "/Projects",
        name: "projectsPage",
        component: () => import("@/views/ProjectsPage.vue"),
        meta: { title: "Projects" },
    },
    {
        path: "/AboutProject",
        name: "aboutProjectPage",
        component: () => import("@/views/AboutProject.vue"),
        meta: { title: "About" },
    },
    {
        path: "/Gallery",
        name: "galleryPage",
        component: () => import("@/views/GalleryPage.vue"),
        meta: { title: "Gallery", hideFooter: true },
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
