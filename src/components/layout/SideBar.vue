<template>
    <section
        @click="handleSidebarClick"
        :class="['side_bar_container', { collapsed: preferencesStore.isSidebarCollapsed }]"
        class="side_bar_container bg-primary-white border-black-10 sticky top-2 left-2 z-100 ml-2! flex flex-col items-start justify-between rounded-2xl border shadow-[0px_3px_11px_0px_rgba(0,0,0,0.06)]"
    >
        <div class="flex w-full flex-col items-start justify-start">
            <div
                v-if="preferencesStore.isSidebarExpanded"
                class="hover:bg-secondary-white absolute top-2 right-2 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[8px]"
                @click.stop="preferencesStore.toggleSidebar()"
            >
                <SvgIcon name="sidebar-icon" />
            </div>
            <div class="flex w-full items-start justify-start">
                <div class="flex min-h-10 items-center justify-start gap-[6px]">
                    <img
                        class="bg-secondary-white block h-10 w-10 overflow-hidden"
                        :class="[
                            'side_bar_avatar',
                            { collapsed: preferencesStore.isSidebarCollapsed },
                        ]"
                        :src="myProfileImage"
                        alt="avatar image"
                    />
                    <div
                        v-if="preferencesStore.isSidebarCollapsed"
                        class="sidebar__avatar-toggle bg-fourth-gray hover:bg-third-white absolute flex h-10 w-10 cursor-pointer items-center justify-center rounded-[12px]!"
                        @click.stop="preferencesStore.toggleSidebar()"
                    >
                        <SvgIcon name="sidebar-icon" />
                    </div>
                    <Transition name="sidebar-fade-element">
                        <p
                            v-if="preferencesStore.isSidebarExpanded"
                            class="sidebar__profile-text text-primary-dark absolute flex justify-center text-base font-medium whitespace-nowrap"
                        >
                            {{ $t("global.my_name_title") }}
                        </p>
                    </Transition>
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
                        <Transition name="sidebar-fade-element">
                            <span v-if="preferencesStore.isSidebarExpanded">
                                {{ $t(link.name) }}
                            </span>
                        </Transition>
                    </RouterLink>
                </Button>
                <Divider class="my-2!" />
                <Button
                    variant="_side-bar"
                    shape="regular"
                    padding="compact"
                    icon="changelog-icon"
                    @click="openChangelog"
                >
                    <Transition name="sidebar-fade-element">
                        <span v-if="preferencesStore.isSidebarExpanded">
                            {{ $t("global.changelog_title") }}
                        </span>
                    </Transition>
                </Button>
                <Button
                    variant="_side-bar"
                    shape="regular"
                    padding="compact"
                    icon="command-icon"
                    @click="openShortcuts"
                >
                    <Transition name="sidebar-fade-element">
                        <span v-if="preferencesStore.isSidebarExpanded">
                            {{ $t("global.kb_shortcuts_title") }}
                        </span>
                    </Transition>
                </Button>
            </div>
            <Divider class="my-2!" />
            <Transition name="sidebar-fade-element">
                <div
                    v-if="preferencesStore.isSidebarExpanded"
                    class="flex w-full flex-col items-start justify-start gap-3 pl-[10px]!"
                >
                    <p class="text-primary-dark text-base font-medium whitespace-nowrap">
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
                            :iconOptions="[
                                'light-theme-icon',
                                'dark-theme-icon',
                                'system-theme-icon',
                            ]"
                            @update:activeIndex="preferencesStore.setThemeByIndex"
                        />
                    </div>
                </div>
            </Transition>
            <Divider v-if="preferencesStore.isSidebarExpanded" class="my-2!" />
            <div class="w-full">
                <Button
                    buttonType="external"
                    variant="_side-bar"
                    shape="regular"
                    padding="compact"
                    icon="download-icon"
                    :href="RESUME_URL"
                    :disabled="!RESUME_URL"
                >
                    <Transition name="sidebar-fade-element">
                        <span v-if="preferencesStore.isSidebarExpanded">
                            {{ $t("global.download_btn_title") }}
                        </span>
                    </Transition>
                </Button>
            </div>
        </div>
        <Transition name="sidebar-fade-element">
            <p
                v-if="preferencesStore.isSidebarExpanded"
                class="text-secondary-gray text-sm font-normal"
            >
                v.{{ APP_VERSION }}
            </p>
        </Transition>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useModalStore } from "@/stores/useModalStore";
import { usePreferencesStore } from "@/stores/usePreferencesStore";
import { APP_VERSION, RESUME_URL } from "@/constants/appConstants";

import Button from "@/components/ui/atoms/Button.vue";
import Divider from "@/components/ui/atoms/Divider.vue";
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import ToggleTab from "@/components/ui/molecules/ToggleTab.vue";

import myProfileImage from "@/assets/images/my-profile-image.webp";

const route = useRoute();

const modalStore = useModalStore();
const preferencesStore = usePreferencesStore();

const isActive = (path: string): boolean => route.path === path;

const languageIndex = computed<number>(() => preferencesStore.localeIndex);
const themeIndex = computed<number>(() => preferencesStore.themeIndex);

const openShortcuts = (): void => {
    modalStore.open("shortcuts");
};

const openChangelog = (): void => {
    modalStore.open("changelog");
};

const handleSidebarClick = (event: MouseEvent): void => {
    if (!preferencesStore.isSidebarCollapsed) return;

    const target = event.target as HTMLElement;
    const isInteractive = target.closest('button, a, [role="button"]');

    if (!isInteractive) {
        preferencesStore.toggleSidebar();
    }
};

const navLinks = [
    { name: "global.home_btn_title", icon: "home-icon", path: "/" },
    { name: "global.about_btn_title", icon: "profile-card-icon", path: "/about" },
    { name: "global.projects_btn_title", icon: "projects-icon", path: "/projects" },
    { name: "global.gallery_btn_title", icon: "gallery-icon", path: "/gallery" },
];
</script>

<style lang="scss">
$spring: cubic-bezier(0.34, 1.3, 0.64, 1);
$ease-out: cubic-bezier(0.4, 0, 0.2, 1);

.side_bar_container {
    min-width: 256px;
    max-width: 256px;
    height: calc(100vh - 16px);
    padding: 16px;

    transition:
        min-width 0.4s $spring,
        max-width 0.4s $spring,
        padding 0.2s $ease-out;

    &.collapsed {
        min-width: 58px;
        max-width: 58px;
        padding: 8px;
        cursor: e-resize;
    }
}

.site_settings_wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.side_bar_avatar {
    border-radius: 100px;
    transition:
        opacity 0.2s $ease-out,
        border-radius 0.4s $ease-out;

    &.collapsed {
        border-radius: 12px;
    }
}

.side_bar_container:hover .side_bar_avatar.collapsed {
    opacity: 0;
}

.sidebar__avatar-toggle {
    opacity: 0;
    transition: opacity 0.2s $ease-out;
}

.side_bar_container:hover .sidebar__avatar-toggle {
    opacity: 1;
}

.sidebar__profile-text {
    left: calc(40px + 6px + 16px);
}
</style>
