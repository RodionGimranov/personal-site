<template>
    <section
        class="side_bar_container bg-primary-white border-black-10 rounded-2xl border shadow-[0px_3px_11px_0px_rgba(0,0,0,0.06)]"
    >
        <div class="side_bar_content_wrapper">
            <div class="user_info_panel_wrapper">
                <UserInfoPanel />
            </div>
            <div class="side_bar_btn_container">
                <!--  -->
                <RouterLink
                    v-for="link in navLinks"
                    :key="link.path"
                    :to="link.path"
                    class="side_bar_btn text-base"
                    :class="{ _active: isActive(link.path) }"
                >
                    <SvgIcon :name="link.icon" />
                    {{ $t(link.name) }}
                </RouterLink>
                <!--  -->
                <button class="side_bar_btn text-base" @click="openChangelog">
                    <SvgIcon name="changelog-icon" /> {{ $t("global.changelog_title") }}
                </button>
                <!--  -->
            </div>
            <div class="site_settings_container">
                <p class="site_settings_title text-base">{{ $t("global.site_settings_title") }}</p>
                <div class="site_settings_wrapper">
                    <p class="site_settings_subtitle text-sm">
                        {{ $t("global.language_settings_title") }}
                    </p>
                    <ToggleTab
                        storageKey="language-tab"
                        :useToggleIcon="false"
                        :useToggleText="true"
                        :textOptions="['global.selected_lang_ru', 'global.selected_lang_en']"
                        @update:activeIndex="preferencesStore.setByIndex"
                    />
                </div>
                <div class="site_settings_wrapper">
                    <p class="site_settings_subtitle text-sm">
                        {{ $t("global.theme_settings_title") }}
                    </p>
                    <ToggleTab
                        storageKey="theme-tab"
                        :useToggleText="false"
                        :useToggleIcon="true"
                        :iconOptions="['light-theme-icon', 'dark-theme-icon', 'system-theme-icon']"
                        @update:activeIndex="preferencesStore.setThemeByIndex"
                    />
                </div>
            </div>
            <!--  -->
            <div class="download_btn_container">
                <a :href="RESUME_URL" class="side_bar_btn text-base" target="_blank">
                    <SvgIcon name="download-icon" /> {{ $t("global.download_btn_title") }}
                </a>
            </div>
            <!--  -->
        </div>
        <p class="text-secondary-gray text-sm font-normal">v.{{ APP_VERSION }}</p>
    </section>
</template>

<script setup>
import { useRoute } from "vue-router";

import { useModalStore } from "@/stores/useModalStore";
import { usePreferencesStore } from "@/stores/usePreferencesStore";
import { APP_VERSION, RESUME_URL } from "@/constants/appConstants";

import UserInfoPanel from "@/components/layout/SideBar/UserInfoPanel.vue";
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import ToggleTab from "@/components/ui/molecules/ToggleTab.vue";

const route = useRoute();

const modalStore = useModalStore();
const preferencesStore = usePreferencesStore();

const isActive = (path) => route.path === path;

const openChangelog = () => {
    modalStore.open("changelog");
};

const navLinks = [
    { name: "global.home_btn_title", icon: "home-icon", path: "/" },
    { name: "global.about_btn_title", icon: "profile-card-icon", path: "/about" },
    { name: "global.projects_btn_title", icon: "projects-icon", path: "/projects" },
    { name: "global.gallery_btn_title", icon: "gallery-icon", path: "/gallery" },
];
</script>

<style lang="scss">
.side_bar_container {
    position: sticky;
    top: 8px;
    min-width: 256px;
    max-width: 256px;
    height: calc(100vh - 16px);
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

    font-weight: 400;
    color: var(--third-gray);

    &:hover {
        background: var(--secondary-white);
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
    font-weight: 500;
    color: var(--primary-dark);
}

.download_btn_container {
    width: 100%;
}
</style>
