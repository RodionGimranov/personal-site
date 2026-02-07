<template>
    <footer>
        <div class="footer_left_side_content">
            <p class="footer_title">{{ $t("global.footer_fun_text") }}</p>
            <p class="copyright_text">{{ $t("global.footer_copyright_text") }}</p>
        </div>
        <div class="footer_right_side_content">
            <div class="footer_nav_links_container">
                <p class="footer_title link_title">{{ $t("global.footer_router_links_title") }}</p>
                <RouterLink
                    v-for="link in navLinks"
                    :key="link.path"
                    :to="link.path"
                    class="footer_link"
                    >{{ $t(link.name) }}</RouterLink
                >
            </div>
            <div class="footer_social_links_container">
                <p class="footer_title link_title">{{ $t("global.footer_info_links_title") }}</p>
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
                <p class="footer_title link_title">{{ $t("global.footer_social_links_title") }}</p>
                <a
                    v-for="link in socialLinks"
                    :key="link.path"
                    :href="link.url"
                    class="footer_link"
                    target="_blank"
                    >{{ $t(link.name) }}</a
                >
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useModalStore } from "@/stores/useModalStore";
import { RESUME_URL, FIGMA_DESIGN_URL } from "@/constants/appConstants";

const modalStore = useModalStore();

const openChangelog = () => {
    modalStore.open("changelog");
};

const navLinks = [
    { name: "global.home_btn_title", path: "/home" },
    { name: "global.about_btn_title", path: "/about" },
    { name: "global.projects_btn_title", path: "/projects" },
    { name: "global.gallery_btn_title", path: "/gallery" },
];

const socialLinks = [
    { name: "global.github_title", url: "https://github.com/RodionGimranov" },
    { name: "global.linkedin_title", url: "https://www.linkedin.com/in/rodiongimranov/" },
    { name: "global.telegram_title", url: "https://t.me/RodionGimranov" },
    { name: "global.instagram_title", url: "https://www.instagram.com/esta_laowai/" },
];
</script>

<style lang="scss">
footer {
    width: 100%;
    margin-top: 100px;
    padding: 36px 64px;
    background: var(--primary-white);
    border-top: 3px solid var(--black-10);

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}

.footer_left_side_content {
    height: 128px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.footer_title {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-dark);
}

.copyright_text {
    font-size: 14px;
    font-weight: 400;
    color: var(--third-gray);
}

.footer_right_side_content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 70px;
}

.footer_nav_links_container,
.footer_social_links_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.link_title {
    margin-bottom: 4px;
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
