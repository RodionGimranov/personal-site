import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "homePage",
        component: () => import("@/views/HomePage.vue"),
        meta: { titleKey: "global.my_name_title" },
    },
    {
        path: "/about",
        name: "aboutPage",
        component: () => import("@/views/AboutPage.vue"),
        meta: { titleKey: "global.about_tab_title" },
    },
    {
        path: "/projects",
        name: "projectsPage",
        component: () => import("@/views/ProjectsPage.vue"),
        meta: { titleKey: "global.projects_tab_title" },
    },
    {
        path: "/about-project/:id",
        name: "aboutProjectPage",
        component: () => import("@/views/AboutProjectPage.vue"),
        meta: { titleKey: "global.about_project_tab_title" },
    },
    {
        path: "/gallery",
        name: "galleryPage",
        component: () => import("@/views/GalleryPage.vue"),
        meta: { titleKey: "global.gallery_tab_title", hideFooter: true },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: () => import("@/views/ErrorPage.vue"),
        meta: { titleKey: "global.error_tab_title", hideFooter: true },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.afterEach(() => {
    requestAnimationFrame(() => {
        const el = document.querySelector<HTMLElement>(".scrolled_content");
        el?.scrollTo({ top: 0, behavior: "auto" });
    });
});

export default router;
