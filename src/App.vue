<template>
    <main>
        <SideBar />
        <MainContent />
        <transition name="show-modal">
            <ChangelogModal v-if="modalStore.isOpen('changelog')" />
            <!-- <BackgroundModal  /> -->
        </transition>
        <!-- <transition name="show-arrow-btn"> -->
        <!-- <TopButton  @click="scrollToTop" /> -->
        <!-- </transition> -->
        <!-- <div class="blur_mask_wrapper">
            <BlurMask />
        </div> -->
    </main>
</template>

<script setup>
import { useModalStore } from "@/stores/useModalStore.js";

import SideBar from "@/components/layout/SideBar.vue";
import MainContent from "@/components/layout//MainContent.vue";

import ChangelogModal from "@/components/ui/modals/ChangelogModal.vue";
// import BackgroundModal from "@/components/ui/modals/BackgroundModal.vue";
// import TopButton from "./components/ui/buttons/TopButton.vue";
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

.blur_mask_wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc(100% - 272px);
    height: 156px;
    z-index: 2;
    overflow: hidden;
    border-radius: 16px;
    pointer-events: none;
}
</style>
