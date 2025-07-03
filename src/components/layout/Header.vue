<template>
    <header>
        <HomeButton />
        <nav>
            <ToggleTab
                :tabs="[
                    { text: 'message.home_btn_title', value: 'Главная', to: '/Home' },
                    { text: 'message.about_btn_title', value: 'Обо мне', to: '/About' },
                    { text: 'message.projects_btn_title', value: 'Проекты', to: '/Prolects' },
                ]"
                buttonType="router-link"
                @update:activeTab="selectedTab = $event"
            />
        </nav>
        <div class="header_round_btn_container">
            <div ref="refRoundButton">
                <RoundButton @click="isDropdownOpen = !isDropdownOpen">
                    <div class="dots_container">
                        <span v-for="dots in 3" :key="dots"></span>
                    </div>
                </RoundButton>
            </div>
            <transition name="show-dropdown-menu">
                <div v-show="isDropdownOpen" ref="refHeaderDropdown">
                    <HeaderDropdown />
                </div>
            </transition>
        </div>
    </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

import { useEscapeKeyClose } from "@/composables/useEscapeKey.js";
import { useScrollLock } from "@/composables/useScrollLock.js";

import HomeButton from "@/components/ui/Button/HomeButton.vue";
import ToggleTab from "@/components/ui/ToggleTab.vue";
import RoundButton from "@/components/ui/Button/RoundButton.vue";
import HeaderDropdown from "@/components/ui/HeaderDropdown.vue";

const { lockScroll, unlockScroll } = useScrollLock();

const isDropdownOpen = ref(false);
const refRoundButton = ref(null);
const refHeaderDropdown = ref(null);

watch(isDropdownOpen, (newValue) => {
    newValue ? lockScroll() : unlockScroll();
});

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

onClickOutside(refHeaderDropdown, (event) => {
    if (refRoundButton.value && !refRoundButton.value.contains(event.target)) {
        closeDropdown();
    }
});

useEscapeKeyClose(() => {
    closeDropdown();
});
</script>

<style lang="scss">
header {
    position: sticky;
    top: 0px;
    width: 100%;
    background: $primary_white;
    padding: 24px 60px 0px 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header_round_btn_container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.dots_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    span {
        width: 5px;
        height: 5px;
        border-radius: 100px;
        background: $primary_dark;
    }
}
</style>
