<template>
    <section class="main_content_container common_layout_style">
        <div ref="scrollEl" class="scrolled_content">
            <div class="app-layout">
                <RouterView />
            </div>
            <Footer v-if="!$route.meta.hideFooter" />
        </div>
        <div v-if="isBlurVisible" class="blur_mask_wrapper">
            <BlurMask />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import Footer from "@/components/layout/Footer.vue";
import BlurMask from "@/components/ui/atoms/BlurMask.vue";

const BLUR_HIDE_OFFSET = 140;

const scrollEl = ref(null);
const isBlurVisible = ref(false);

const updateBlurVisibility = () => {
    const el = scrollEl.value;
    if (!el) return;

    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;

    isBlurVisible.value = distanceToBottom > BLUR_HIDE_OFFSET;
};

onMounted(() => {
    const el = scrollEl.value;
    if (!el) return;

    el.addEventListener("scroll", updateBlurVisibility, { passive: true });

    updateBlurVisibility();
});

onBeforeUnmount(() => {
    scrollEl.value?.removeEventListener("scroll", updateBlurVisibility);
});

defineExpose({
    scrollEl,
});
</script>

<style lang="scss">
.main_content_container {
    position: relative;
    overflow: hidden;

    display: flex;
    flex: 1 0 0%;
}

.scrolled_content {
    position: relative;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}

.app-layout {
    width: 100%;
    flex: 1 0 auto;
    min-height: 100vh;
}

.blur_mask_wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 140px;
    opacity: 1;
    z-index: 50;
    pointer-events: none;

    &.is-hidden {
        opacity: 0;
    }
}
</style>
