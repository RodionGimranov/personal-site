<template>
    <main ref="layoutRef" class="relative flex items-start justify-start">
        <SideBar />
        <MainContent />
        <transition name="show-modal">
            <ChangelogModal v-if="modalStore.isOpen('changelog')" />
        </transition>
        <transition name="show-arrow-btn">
            <TopButton v-if="isVisible" @click="scrollToTop" />
        </transition>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

import { useModalStore } from "@/stores/useModalStore";

import SideBar from "@/components/layout/SideBar/SideBar.vue";
import MainContent from "@/components/layout/MainContent.vue";
import ChangelogModal from "@/components/layout/ChangelogModal.vue";
import TopButton from "@/components/ui/atoms/TopButton.vue";

const modalStore = useModalStore();

const layoutRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const VISIBILITY_OFFSET = 300;

const handleScroll = () => {
    isVisible.value = window.scrollY > VISIBILITY_OFFSET;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

watch(
    () => modalStore.isAnyOpen,
    (isOpen) => {
        const scrollbarWidth = getScrollbarWidth();
        const el = layoutRef.value;

        if (!el) return;

        if (isOpen) {
            document.body.style.overflow = "hidden";
            el.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            el.style.paddingRight = "";
        }
    },
    { immediate: true },
);
</script>

<style lang="scss"></style>
