<template>
    <section
        class="w-full min-h-screen overflow-hidden flex flex-col justify-between items-start py-4! px-9!"
    >
        <RouterView />
        <Footer v-if="!$route.meta.hideFooter" />
        <div
            v-if="isBlurVisible"
            class="fixed right-0 bottom-0 w-[calc(100%-266px)] h-35 opacity-100 z-50 pointer-events-none"
        >
            <BlurMask />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

import Footer from "@/components/layout/Footer.vue";
import BlurMask from "@/components/ui/atoms/BlurMask.vue";

const BLUR_HIDE_OFFSET = 140;

const isBlurVisible = ref(true);

const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const distanceToBottom = documentHeight - (scrollTop + windowHeight);

    isBlurVisible.value = distanceToBottom > BLUR_HIDE_OFFSET;
};

onMounted(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss"></style>
