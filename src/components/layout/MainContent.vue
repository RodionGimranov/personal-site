<template>
    <section class="main_content_container common_layout_style">
        <div ref="scrollEl" class="scrolled_content">
            <div class="app-layout">
                <RouterView />
            </div>
            <Footer v-if="!$route.meta.hideFooter" />
        </div>
        <div class="blur_mask_wrapper" :class="{ 'is-hidden': !isBlurVisible }">
            <BlurMask />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import Footer from "@/components/layout/Footer.vue";
import BlurMask from "@/components/ui/atoms/BlurMask.vue";

const BLUR_HIDE_OFFSET = 100;
const BLUR_HEIGHT = 140;

const scrollEl = ref(null);
const isBlurVisible = ref(true);

const handleScroll = () => {
    const el = scrollEl.value;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;

    const distanceToBottom = scrollHeight - (scrollTop + clientHeight);

    isBlurVisible.value = distanceToBottom > BLUR_HIDE_OFFSET;
};

onMounted(() => {
    if (!scrollEl.value) return;

    scrollEl.value.addEventListener("scroll", handleScroll, {
        passive: true,
    });

    handleScroll();
});

onBeforeUnmount(() => {
    scrollEl.value?.removeEventListener("scroll", handleScroll);
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
