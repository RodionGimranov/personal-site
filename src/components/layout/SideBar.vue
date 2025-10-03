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
                    @click="closeSidebar"
                >
                    <SvgIcon :name="link.icon" />
                    {{ $t(link.name) }}
                </RouterLink>
                <button class="side_bar_btn" @click="openChangelogModal">
                    <SvgIcon name="changelog-icon" /> {{ $t("message.changelog_btn_title") }}
                </button>
            </div>
            <div class="site_settings_container">
                <!-- <p class="site_settings_title">{{ $t("message.site_settings_title") }}</p> -->
                <div class="site_settings_wrapper">
                    <p class="site_settings_subtitle">
                        {{ $t("message.language_settings_title") }}
                    </p>
                    <ToggleTab
                        storageKey="language-tab"
                        :useToggleIcon="true"
                        :useToggleText="true"
                        :textOptions="['message.selected_lang_ru', 'message.selected_lang_en']"
                        @update:activeIndex="onActiveIndexChanged"
                    />
                </div>
                <!-- <div class="site_settings_wrapper">
                    <p class="site_settings_subtitle">{{ $t("message.theme_settings_title") }}</p>
                    <ToggleTab
                        storageKey="theme-tab"
                        :useToggleText="false"
                        :useToggleIcon="true"
                        :iconOptions="['light-theme-icon', 'dark-theme-icon', 'system-theme-icon']"
                        @update:activeIndex="onThemeIndexChanged"
                    />
                </div> -->
            </div>
            <div class="download_btn_container">
                <a :href="resumeLink" class="side_bar_btn" target="_blank">
                    <SvgIcon name="download-icon" /> {{ $t("message.download_btn_title") }}
                </a>
            </div>
        </div>
        <p class="version_number">v{{ appVersion }}</p>
    </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { useLanguageSwitcher } from "@/composables/useLanguageSwitcher.js";

import UserInfoPanel from "@/components/layout/SideBar/UserInfoPanel.vue";
import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";
import ToggleTab from "@/components/ui/ToggleTab.vue";

import myProfileImage from "@/assets/images/my-profile-image.webp";

const store = useStore();
const route = useRoute();

const appVersion = computed(() => store.getters.getAppVersion);
const resumeLink = computed(() => store.getters.getResumeLink);

const isActive = (path) => route.path === path;

const navLinks = [
    { name: "message.home_btn_title", icon: "home-icon", path: "/Home" },
    { name: "message.about_btn_title", icon: "profile-card-icon", path: "/About" },
    { name: "message.projects_btn_title", icon: "projects-icon", path: "/Projects" },
    { name: "message.gallery_btn_title", icon: "gallery-icon", path: "/Gallery" },
];

const activeIndex = ref(0);
const textOptions = ["Ru", "En"];
const { switchLanguageByTab } = useLanguageSwitcher();

function onActiveIndexChanged(index) {
    activeIndex.value = index;
    switchLanguageByTab(textOptions, index);
}

function openChangelogModal() {
    store.commit("layout/OPEN_CHANGELOG_MODAL");
}

const closeSidebar = () => {
    store.commit("layout/CLOSE_SIDEBAR");
};

function onThemeIndexChanged(index) {
    const themeMap = {
        0: "light",
        1: "dark",
        2: "system",
    };

    const selectedTheme = themeMap[index];
    if (selectedTheme) {
        store.commit("SET_THEME", selectedTheme);
    }
}
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
    font-weight: 400;
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
    margin: 8px 0;
    padding: 8px 0 8px 10px;
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

.site_settings_wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.site_settings_subtitle {
    font-size: 14px;
    font-weight: 500;
    color: $primary_dark;
}

.download_btn_container {
    width: 100%;
}

.version_number {
    font-size: 14px;
    font-weight: 400;
    color: $secondary_gray;
}
</style>
