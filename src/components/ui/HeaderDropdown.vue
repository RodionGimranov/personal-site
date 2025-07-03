<template>
    <div class="header_dropdown_container">
        <div class="user_settings_container">
            <p class="user_settings_title">{{ $t("message.user_language_title") }}</p>
            <ToggleTab
                :tabs="[
                    { text: 'Ru', value: 'Ru' },
                    { text: 'En', value: 'En' },
                ]"
                :padding="'3px 11px'"
                :fontSize="'16px'"
                v-model:activeTab="selectedTab"
            />
        </div>
        <div class="user_settings_container">
            <p class="user_settings_title">{{ $t("message.user_theme_title") }}</p>
        </div>
        <div class="dropdown_btn_container">
            <button class="dropdown_btn">{{ $t("message.changelog_btn_title") }}</button>
        </div>
        <p class="version_number">v.{{ appVersion }}</p>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import { useLanguageSwitcher } from "@/composables/useLanguageSwitcher.js";

import ToggleTab from "@/components/ui/ToggleTab.vue";

const store = useStore();

const appVersion = computed(() => store.getters.appVersion);
const { selectedTab, setLanguage } = useLanguageSwitcher();
</script>

<style lang="scss">
.header_dropdown_container {
    position: absolute;
    top: 50px;
    right: 0px;
    width: 220px;
    overflow: hidden;
    border-radius: 20px;
    background: $primary_white;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.user_settings_container {
    width: 100%;
    padding: 8px 8px 8px 18px;
    border-bottom: 1px solid $fourth_white;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user_settings_title {
    font-size: 16px;
    font-weight: 500;
    color: $primary_dark;
}

.dropdown_btn_container {
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid $fourth_white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.dropdown_btn {
    width: 100%;
    padding: 8px 10px;
    transition: 0.2s;
    border-radius: 12px;

    font-size: 16px;
    font-weight: 500;
    color: $primary_dark;
    text-align: left;

    &:hover {
        background: $sixth_white;
    }
}

.version_number {
    margin: 8px 8px 8px 18px;
    font-size: 14px;
    font-weight: 400;
    color: $primary_gray;
}
</style>
