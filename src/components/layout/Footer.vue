<template>
    <footer
        class="border-t-black-10 mt-25! flex w-full items-start justify-between gap-5 border-t-[3px] pt-16! pr-12!"
    >
        <div class="flex h-34 flex-col items-start justify-between">
            <p class="footer_title text-sm">{{ $t("global.footer_fun_text") }}</p>
            <p class="text-third-gray text-sm font-normal">
                {{ $t("global.footer_copyright_text") }}, {{ currentYear }}
            </p>
        </div>
        <div class="flex items-start justify-start gap-[70px]">
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
            <div class="footer_info_container">
                <p class="footer_title mb-1! text-sm">{{ $t("global.footer_info_links_title") }}</p>
                <a :href="RESUME_URL" class="footer_link text-sm" target="_blank">{{
                    $t("global.download_btn_title")
                }}</a>
                <a :href="FIGMA_DESIGN_URL" class="footer_link text-sm" target="_blank"
                    >Figma UI Kit
                </a>
                <button class="footer_link text-sm" @click="openChangelog">
                    {{ $t("global.changelog_title") }}
                </button>
                <button class="footer_link text-sm" @click="openShortcuts">
                    {{ $t("global.kb_shortcuts_title") }}
                </button>
            </div>
            <div class="footer_contacts_container">
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
import {
    RESUME_URL,
    FIGMA_DESIGN_URL,
    GITHUB_URL,
    LINKEDIN_URL,
    TELEGRAM_URL,
    INSTAGRAM_URL,
} from "@/constants/appConstants";

interface NavLink {
    name: string;
    path: string;
}

interface SocialLink {
    name: string;
    url: string;
}

const modalStore = useModalStore();

const currentYear = new Date().getFullYear();

const openShortcuts = () => {
    modalStore.open("shortcuts");
};

const openChangelog: () => void = () => {
    modalStore.open("changelog");
};

const navLinks: NavLink[] = [
    { name: "global.home_btn_title", path: "/" },
    { name: "global.about_btn_title", path: "/about" },
    { name: "global.projects_btn_title", path: "/projects" },
    { name: "global.gallery_btn_title", path: "/gallery" },
];

const socialLinks: SocialLink[] = [
    { name: "GitHub", url: GITHUB_URL },
    { name: "LinkedIn", url: LINKEDIN_URL },
    { name: "Telegram", url: TELEGRAM_URL },
    { name: "Instagram", url: INSTAGRAM_URL },
];
</script>

<style lang="scss">
.footer_title {
    font-weight: 500;
    color: var(--primary-dark);
}

.footer_nav_links_container,
.footer_info_container,
.footer_contacts_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;
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
