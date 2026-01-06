<template>
    <section class="main_content_container common_layout_style">
        <div ref="scrollEl" class="scrolled_content">
            <div class="app-layout">
                <RouterView />
            </div>
            <Footer v-if="!$route.meta.hideFooter" />
        </div>
    </section>
</template>

<script setup>
import { ref, defineExpose } from "vue";

import Footer from "@/components/layout/Footer.vue";

const scrollEl = ref(null);

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
</style>
