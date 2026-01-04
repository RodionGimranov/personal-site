<template>
    <main>
        <SideBar />
        <MainContent />
        <transition name="show-modal">
            <ChangelogModal v-if="modalStore.isOpen('changelog')" />
        </transition>
        <!-- <transition name="show-arrow-btn"> -->
        <!-- <TopButton  @click="scrollToTop" /> -->
        <!-- </transition> -->
        <!-- <BlurMask /> -->
    </main>
</template>

<script setup>
import { useModalStore } from "@/stores/useModalStore.js";

import SideBar from "@/components/layout/SideBar/SideBar.vue";
import MainContent from "@/components/layout//MainContent.vue";
import ChangelogModal from "@/components/layout/ChangelogModal.vue";
// import TopButton from "./components/ui/TopButton.vue";
// import BlurMask from "@/components/ui/BlurMask.vue";

const modalStore = useModalStore();
</script>

<style lang="scss">
main {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
}
</style>
