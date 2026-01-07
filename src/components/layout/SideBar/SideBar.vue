<template>
    <section class="side_bar_container common_layout_style">
        <div class="side_bar_content_wrapper">
            <div class="user_info_panel_wrapper">
                <UserInfoPanel />
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
                <button class="side_bar_btn" @click="openChangelog">
                    <SvgIcon name="changelog-icon" /> {{ $t("message.changelog_btn_title") }}
                </button>
            </div>
            <div class="site_settings_container">
                <p class="site_settings_title">{{ $t("message.site_settings_title") }}</p>
                <div class="site_settings_wrapper">
                    <p class="site_settings_subtitle">
                        {{ $t("message.language_settings_title") }}
                    </p>
                    <ToggleTab
                        storageKey="language-tab"
                        :useToggleIcon="true"
                        :useToggleText="true"
                        :textOptions="['message.selected_lang_ru', 'message.selected_lang_en']"
                        @update:activeIndex="languageStore.setByIndex"
                    />
                </div>
                <div class="site_settings_wrapper">
                    <p class="site_settings_subtitle">{{ $t("message.theme_settings_title") }}</p>
                    <ToggleTab
                        storageKey="theme-tab"
                        :useToggleText="false"
                        :useToggleIcon="true"
                        :iconOptions="['light-theme-icon', 'dark-theme-icon', 'system-theme-icon']"
                    />
                </div>
            </div>
            <div class="download_btn_container">
                <a :href="RESUME_URL" class="side_bar_btn" target="_blank">
                    <SvgIcon name="download-icon" /> {{ $t("message.download_btn_title") }}
                </a>
            </div>
        </div>
        <p class="version_number">v{{ APP_VERSION }}</p>
    </section>
</template>

<script setup>
import { useRoute } from "vue-router";

import { useModalStore } from "@/stores/useModalStore.js";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { APP_VERSION, RESUME_URL } from "@/constants/appConstants.js";

import UserInfoPanel from "@/components/layout/SideBar/UserInfoPanel.vue";
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import ToggleTab from "@/components/ui/molecules/ToggleTab.vue";

const route = useRoute();

const modalStore = useModalStore();
const languageStore = useLanguageStore();
const isActive = (path) => route.path === path;

const openChangelog = () => {
    modalStore.open("changelog");
};

const navLinks = [
    { name: "message.home_btn_title", icon: "home-icon", path: "/home" },
    { name: "message.about_btn_title", icon: "profile-card-icon", path: "/about" },
    { name: "message.projects_btn_title", icon: "projects-icon", path: "/projects" },
    { name: "message.gallery_btn_title", icon: "gallery-icon", path: "/gallery" },
];
</script>

<style lang="scss">
.side_bar_container {
    width: 256px;
    padding: 16px;
    overflow: hidden;

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
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.side_bar_btn_container {
    width: 100%;
    margin-top: 28px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;
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
    font-weight: 400;
    color: var(--third-gray);

    &:hover {
        background: var(--secondary-white);
        color: var(--primary-dark);
    }

    &._active {
        background: var(--secondary-white);
        color: var(--primary-dark);
    }
}

.site_settings_container {
    width: 100%;
    margin: 8px 0;
    padding: 8px 0 8px 10px;
    border-top: 1px solid var(--black-10);
    border-bottom: 1px solid var(--black-10);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
}

.site_settings_title {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-dark);
}

.site_settings_wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.site_settings_subtitle {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-dark);
}

.download_btn_container {
    width: 100%;
}

.version_number {
    font-size: 14px;
    font-weight: 400;
    color: var(--secondary-gray);
}
</style>
