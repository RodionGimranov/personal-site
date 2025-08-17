import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/", redirect: "/Home" },
    {
        path: "/Home",
        name: "homePage",
        component: () => import("@/views/HomePage.vue"),
        meta: { titleKey: "message.home_tab_title" },
    },
    {
        path: "/About",
        name: "aboutPage",
        component: () => import("@/views/AboutPage.vue"),
        meta: { titleKey: "message.about_tab_title" },
    },
    {
        path: "/Projects",
        name: "projectsPage",
        component: () => import("@/views/ProjectsPage.vue"),
        meta: { titleKey: "message.projects_tab_title" },
    },
    {
        path: "/About-Project/:id",
        name: "aboutProjectPage",
        component: () => import("@/views/AboutProjectPage.vue"),
        meta: { titleKey: "message.about_project_tab_title" },
    },
    {
        path: "/Gallery",
        name: "galleryPage",
        component: () => import("@/views/GalleryPage.vue"),
        meta: { titleKey: "message.gallery_tab_title", hideFooter: true },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.afterEach(() => {
    requestAnimationFrame(() => {
        const el = document.querySelector(".scrolled_content");
        if (el) el.scrollTo({ top: 0, behavior: "auto" });
    });
});

export default router;
