<template>
    <section
        class="side_bar_container bg-primary-white border-black-10 sticky top-2 flex max-w-[256px] min-w-[256px] flex-col items-start justify-between overflow-hidden rounded-2xl border p-4! shadow-[0px_3px_11px_0px_rgba(0,0,0,0.06)]"
    >
        <div class="flex w-full flex-col items-start justify-start">
            <div class="flex w-full items-start justify-start">
                <div class="flex items-center justify-center gap-[6px]">
                    <img
                        class="bg-secondary-white flex h-10 w-10 items-center justify-center overflow-hidden rounded-[100px]"
                        :src="myProfileImage"
                        alt="user image"
                    />
                    <div class="flex flex-col items-start justify-start">
                        <p class="text-primary-dark text-base font-semibold">
                            {{ $t("global.my_name_title") }}
                        </p>
                        <p class="text-third-gray text-sm font-normal">
                            {{ $t("global.my_role_title") }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-7! flex w-full flex-col items-start justify-start gap-px">
                <Button
                    v-for="link in navLinks"
                    :key="link.path"
                    variant="_side-bar"
                    buttonType="router"
                    shape="regular"
                    padding="compact"
                    v-slot="slotProps"
                >
                    <RouterLink
                        :to="link.path"
                        v-bind="slotProps"
                        :class="{ _active: isActive(link.path) }"
                    >
                        <SvgIcon :name="link.icon" />
                        {{ $t(link.name) }}
                    </RouterLink>
                </Button>
                <Button
                    variant="_side-bar"
                    shape="regular"
                    padding="compact"
                    icon="command-icon"
                    :buttonText="$t('global.kb_shortcuts_title')"
                    @click="openShortcuts"
                />
                <Button
                    variant="_side-bar"
                    shape="regular"
                    padding="compact"
                    icon="changelog-icon"
                    :buttonText="$t('global.changelog_title')"
                    @click="openChangelog"
                />
            </div>
            <div
                class="site_settings_container flex w-full flex-col items-start justify-start gap-3"
            >
                <p class="text-primary-dark text-base font-medium">
                    {{ $t("global.site_settings_title") }}
                </p>
                <div class="site_settings_wrapper">
                    <p class="text-primary-dark text-sm font-medium">
                        {{ $t("global.language_settings_title") }}
                    </p>
                    <ToggleTab
                        :activeIndex="languageIndex"
                        :useToggleText="true"
                        :textOptions="['global.selected_lang_ru', 'global.selected_lang_en']"
                        @update:activeIndex="preferencesStore.setLocaleByIndex"
                    />
                </div>
                <div class="site_settings_wrapper">
                    <p class="text-primary-dark text-sm font-medium">
                        {{ $t("global.theme_settings_title") }}
                    </p>
                    <ToggleTab
                        :activeIndex="themeIndex"
                        :useToggleIcon="true"
                        :iconOptions="['light-theme-icon', 'dark-theme-icon', 'system-theme-icon']"
                        @update:activeIndex="preferencesStore.setThemeByIndex"
                    />
                </div>
            </div>
            <div class="w-full">
                <Button
                    buttonType="external"
                    variant="_side-bar"
                    shape="regular"
                    padding="compact"
                    icon="download-icon"
                    :href="RESUME_URL"
                    :buttonText="$t('global.download_btn_title')"
                    :disabled="!RESUME_URL"
                />
            </div>
        </div>
        <p class="text-secondary-gray text-sm font-normal">v.{{ APP_VERSION }}</p>
    </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useModalStore } from "@/stores/useModalStore";
import { usePreferencesStore } from "@/stores/usePreferencesStore";
import { APP_VERSION, RESUME_URL } from "@/constants/appConstants";

import Button from "@/components/ui/atoms/Button.vue";
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import ToggleTab from "@/components/ui/molecules/ToggleTab.vue";

import myProfileImage from "@/assets/images/my-profile-image.webp";

const route = useRoute();

const modalStore = useModalStore();
const preferencesStore = usePreferencesStore();

const isActive = (path) => route.path === path;

const languageIndex = computed(() => preferencesStore.localeIndex);
const themeIndex = computed(() => preferencesStore.themeIndex);

const openShortcuts = () => {
    modalStore.open("shortcuts");
};

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
    height: calc(100vh - 16px);
}

.site_settings_container {
    margin: 8px 0;
    padding: 8px 0 8px 10px;
    border-top: 1px solid var(--black-10);
    border-bottom: 1px solid var(--black-10);
}

.site_settings_wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
