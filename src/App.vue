<template>
    <main class="relative flex justify-start items-start gap-4">
        <SideBar />
        <MainContent ref="mainContentRef" />
        <transition name="show-modal">
            <ChangelogModal v-if="modalStore.isOpen('changelog')" />
        </transition>
        <transition name="show-arrow-btn">
            <TopButton v-if="isVisible" @click="scrollToTop" />
        </transition>
    </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { useModalStore } from "@/stores/useModalStore";
import { useScrollToTop } from "@/composables/useScrollToTop.js";

import SideBar from "@/components/layout/SideBar/SideBar.vue";
import MainContent from "@/components/layout//MainContent.vue";
import ChangelogModal from "@/components/layout/ChangelogModal.vue";
import TopButton from "@/components/ui/atoms/TopButton.vue";

const modalStore = useModalStore();
const mainContentRef = ref(null);

const scrollEl = computed(() => mainContentRef.value?.scrollEl);

const { isVisible, scrollToTop } = useScrollToTop(scrollEl, {
    showAfter: 400,
});
</script>

<style lang="scss"></style>
