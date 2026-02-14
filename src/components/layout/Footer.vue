<template>
    <footer
        class="w-full mt-25! flex justify-between items-start gap-5 pt-16! pb-[10px]! pr-12! border-t-[3px] border-t-black-10"
    >
        <div class="h-32 flex flex-col justify-between items-start">
            <p class="footer_title">{{ $t("global.footer_fun_text") }}</p>
            <p class="text-sm font-normal text-third-gray">
                {{ $t("global.footer_copyright_text") }}
            </p>
        </div>
        <div class="flex justify-start items-start gap-17.5">
            <div class="footer_nav_links_container">
                <p class="footer_title mb-1!">{{ $t("global.footer_router_links_title") }}</p>
                <RouterLink
                    v-for="link in navLinks"
                    :key="link.path"
                    :to="link.path"
                    class="footer_link"
                    >{{ $t(link.name) }}</RouterLink
                >
            </div>
            <div class="footer_social_links_container">
                <p class="footer_title mb-1!">{{ $t("global.footer_info_links_title") }}</p>
                <a :href="RESUME_URL" class="footer_link" target="_blank">{{
                    $t("global.download_btn_title")
                }}</a>
                <button class="footer_link" @click="openChangelog">
                    {{ $t("global.changelog_title") }}
                </button>
                <a :href="FIGMA_DESIGN_URL" class="footer_link" target="_blank">{{
                    $t("about.figma_card_title")
                }}</a>
            </div>
            <div class="footer_social_links_container">
                <p class="footer_title mb-1!">{{ $t("global.footer_social_links_title") }}</p>
                <a
                    v-for="link in socialLinks"
                    :key="link.url"
                    :href="link.url"
                    class="footer_link"
                    target="_blank"
                    >{{ $t(link.name) }}</a
                >
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";
import { RESUME_URL, FIGMA_DESIGN_URL } from "@/constants/appConstants";

interface NavLink {
    name: string;
    path: string;
}

interface SocialLink {
    name: string;
    url: string;
}

const modalStore = useModalStore();

const openChangelog: () => void = () => {
    modalStore.open("changelog");
};

const navLinks: NavLink[] = [
    { name: "global.home_btn_title", path: "/home" },
    { name: "global.about_btn_title", path: "/about" },
    { name: "global.projects_btn_title", path: "/projects" },
    { name: "global.gallery_btn_title", path: "/gallery" },
];

const socialLinks: SocialLink[] = [
    { name: "global.github_title", url: "https://github.com/RodionGimranov" },
    { name: "global.linkedin_title", url: "https://www.linkedin.com/in/rodiongimranov/" },
    { name: "global.telegram_title", url: "https://t.me/RodionGimranov" },
    { name: "global.instagram_title", url: "https://www.instagram.com/esta_laowai/" },
];
</script>

<style lang="scss">
.footer_title {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-dark);
}

.footer_nav_links_container,
.footer_social_links_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.footer_link {
    font-size: 14px;
    font-weight: 400;
    color: var(--third-gray);
    line-height: 26px;
    text-align: start;

    &:hover {
        color: var(--primary-dark);
        text-decoration: underline;
    }
}
</style>
