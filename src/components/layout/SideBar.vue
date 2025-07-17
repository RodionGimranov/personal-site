<template>
    <section class="side_bar_container common_layout_style">
        <div class="side_bar_content_wrapper">
            <div class="user_info_panel_wrapper">
                <UserInfoPanel
                    user_name="message.my_name_title"
                    user_role="message.my_role_title"
                    :user_image="myProfileImage"
                />
            </div>
            <div class="side_bar_btn_container">
                <RouterLink
                    v-for="link in navLinks"
                    :key="link.path"
                    :to="link.path"
                    class="side_bar_btn"
                    :class="{ _active: isActive(link.path) }"
                >
                    <SvgIcon :name="link.icon" />
                    {{ $t(link.name) }}
                </RouterLink>
                <button class="side_bar_btn" @click="openChangelogModal">
                    <SvgIcon name="changelog-icon" /> {{ $t("message.changelog_btn_title") }}
                </button>
            </div>
            <div class="site_settings_container">
                <p class="site_settings_title">{{ $t("message.site_settings_title") }}</p>
            </div>
            <div class="download_btn_container">
                <button class="side_bar_btn" @click="downloadCV">
                    <SvgIcon name="download-icon" /> {{ $t("message.download_btn_title") }}
                </button>
            </div>
        </div>
        <p class="version_number">v{{ appVersion }}-{{ $t("message.beta_version_title") }}</p>
    </section>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import UserInfoPanel from "@/components/UserInfoPanel.vue";
import SvgIcon from "@/components/ui/SvgIcon.vue";

import myProfileImage from "@/assets/images/webp/my-profile-image.webp";

const store = useStore();
const route = useRoute();

const appVersion = computed(() => store.getters.appVersion);

const isActive = (path) => route.path === path;

const navLinks = [
    { name: "message.home_btn_title", icon: "home-icon", path: "/Home" },
    { name: "message.about_btn_title", icon: "profile-card-icon", path: "/About" },
    { name: "message.projects_btn_title", icon: "projects-icon", path: "/Projects" },
    { name: "message.gallery_btn_title", icon: "gallery-icon", path: "/Gallery" },
];
</script>

<style lang="scss">
.side_bar_container {
    width: 260px;
    overflow: hidden;
    padding: 24px 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.side_bar_content_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.user_info_panel_wrapper {
    width: 100%;
    padding: 0px 18px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.side_bar_btn_container {
    width: 100%;
    margin-top: 28px;
    padding: 0px 18px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1px;
}

.side_bar_btn {
    width: 100%;
    padding: 8px 10px;
    border-radius: 12px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;

    font-size: 16px;
    font-weight: 500;
    color: $third_gray;

    &:hover {
        background: $secondary_white;
        color: $primary_dark;
    }

    &._active {
        background: $secondary_white;
        color: $primary_dark;
    }
}

.site_settings_container {
    width: 100%;
    padding: 8px 18px 8px 28px;
    margin-top: 8px;
    margin-bottom: 8px;
    border-top: 1px solid $third_white;
    border-bottom: 1px solid $third_white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
}

.site_settings_title {
    font-size: 16px;
    font-weight: 500;
    color: $primary_dark;
}

.download_btn_container {
    width: 100%;
    padding: 0px 18px;
}

.version_number {
    margin-left: 18px;
    font-size: 14px;
    font-weight: 400;
    color: $secondary_gray;
}
</style>
