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
import { ref, onMounted, onBeforeUnmount } from "vue";

import { useModalStore } from "@/stores/useModalStore";

import SideBar from "@/components/layout/SideBar/SideBar.vue";
import MainContent from "@/components/layout/MainContent.vue";
import ChangelogModal from "@/components/layout/ChangelogModal.vue";
import TopButton from "@/components/ui/atoms/TopButton.vue";

const modalStore = useModalStore();

const mainContentRef = ref<InstanceType<typeof MainContent> | null>(null);
const isVisible = ref(false);

const SHOW_AFTER = 400;

const getScrollEl = () => mainContentRef.value?.scrollEl ?? null;

const onScroll = () => {
    const el = getScrollEl();
    if (!el) return;

    isVisible.value = el.scrollTop > SHOW_AFTER;
};

const scrollToTop = () => {
    getScrollEl()?.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

onMounted(() => {
    const el = getScrollEl();
    if (!el) return;

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
    getScrollEl()?.removeEventListener("scroll", onScroll);
});
</script>

<style lang="scss"></style>
