<template>
    <footer>
        <div class="footer_left_side_content">
            <p class="footer_title">{{ $t("message.footer_fun_text") }}</p>
            <p class="copyright_text">{{ $t("message.footer_copyright_text") }}</p>
        </div>
        <div class="footer_right_side_content">
            <div class="footer_nav_links_container">
                <p class="footer_title link_title">{{ $t("message.footer_router_links_title") }}</p>
                <RouterLink
                    v-for="link in navLinks"
                    :key="link.path"
                    :to="link.path"
                    class="footer_link"
                    >{{ $t(link.name) }}</RouterLink
                >
            </div>
            <div class="footer_social_links_container">
                <p class="footer_title link_title">{{ $t("message.footer_info_links_title") }}</p>
                <a :href="resumeLink" class="footer_link" target="_blank">{{
                    $t("message.download_btn_title")
                }}</a>
                <button class="footer_link" @click="openChangelogModal">
                    {{ $t("message.changelog_btn_title") }}
                </button>
            </div>
            <div class="footer_social_links_container">
                <p class="footer_title link_title">{{ $t("message.footer_social_links_title") }}</p>
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
import { computed } from "vue";
import { useStore } from "vuex";

function openChangelogModal() {
    store.commit("modals/OPEN_CHANGELOG_MODAL");
}

const store = useStore();

const resumeLink = computed(() => store.getters.getResumeLink);

const navLinks = [
    { name: "message.home_btn_title", path: "/Home" },
    { name: "message.about_btn_title", path: "/About" },
    { name: "message.projects_btn_title", path: "/Projects" },
    { name: "message.gallery_btn_title", path: "/Gallery" },
];

const socialLinks = [
    { name: "message.github_title", url: "https://github.com/RodionGimranov" },
    { name: "message.linkedin_title", url: "https://www.linkedin.com/in/rodiongimranov/" },
    { name: "message.telegram_title", url: "https://t.me/RodionGimranov" },
    { name: "message.instagram_title", url: "https://www.instagram.com/esta_laowai/" },
];
</script>

<style lang="scss">
footer {
    width: 100%;
    padding: 36px 64px;
    background: $primary_white;
    border-top: 3px solid var(--primary-white-bg);

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
    font-weight: 600;
    color: $primary_dark;
}

.copyright_text {
    font-size: 14px;
    font-weight: 500;
    color: $third_gray;
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
    font-weight: 500;
    color: $third_gray;
    line-height: 26px;

    &:hover {
        color: $primary_dark;
    }
}
</style>
