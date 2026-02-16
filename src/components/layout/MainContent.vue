<template>
    <section
        class="flex min-h-screen w-full flex-col items-start justify-between overflow-hidden px-9! py-4!"
    >
        <RouterView />
        <Footer v-if="!$route.meta.hideFooter" />
        <div
            v-if="isBlurVisible"
            class="pointer-events-none fixed right-0 bottom-0 z-50 h-35 w-[calc(100%-266px)] opacity-100"
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
