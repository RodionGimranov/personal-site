<template>
    <footer
        class="border-t-black-10 mt-25! flex w-full items-start justify-between gap-5 border-t-[3px] pt-16! pr-12! pb-[10px]!"
    >
        <div class="flex h-32 flex-col items-start justify-between">
            <p class="footer_title text-sm">{{ $t("global.footer_fun_text") }}</p>
            <p class="text-third-gray text-sm font-normal">
                {{ $t("global.footer_copyright_text") }}
            </p>
        </div>
        <div class="flex items-start justify-start gap-17.5">
            <div class="footer_nav_links_container">
                <p class="footer_title mb-1! text-sm">
                    {{ $t("global.footer_router_links_title") }}
                </p>
                <RouterLink
                    v-for="link in navLinks"
                    :key="link.path"
                    :to="link.path"
                    class="footer_link text-sm"
                    >{{ $t(link.name) }}</RouterLink
                >
            </div>
            <div class="footer_social_links_container">
                <p class="footer_title mb-1! text-sm">{{ $t("global.footer_info_links_title") }}</p>
                <a :href="RESUME_URL" class="footer_link text-sm" target="_blank">{{
                    $t("global.download_btn_title")
                }}</a>
                <button class="footer_link text-sm" @click="openChangelog">
                    {{ $t("global.changelog_title") }}
                </button>
                <a :href="FIGMA_DESIGN_URL" class="footer_link text-sm" target="_blank">{{
                    $t("about.figma_card_title")
                }}</a>
            </div>
            <div class="footer_social_links_container">
                <p class="footer_title mb-1! text-sm">
                    {{ $t("global.footer_social_links_title") }}
                </p>
                <a
                    v-for="link in socialLinks"
                    :key="link.url"
                    :href="link.url"
                    class="footer_link text-sm"
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
