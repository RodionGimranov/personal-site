<template>
    <section class="main_content_container common_layout_style">
        <div class="scrolled_content">
            <div class="app-layout">
                <router-view />
            </div>
            <Footer v-if="!$route.meta.hideFooter" />
        </div>
    </section>
</template>

<script setup>
import { RouterView, useRouter } from "vue-router";

import Footer from "@/components/layout/Footer.vue";

const router = useRouter();
</script>

<style lang="scss">
.main_content_container {
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    flex: 1 0 0%;
}

.scrolled_content {
    position: relative;
    width: 100%;
    margin: 10px 0;
    overflow-x: hidden;
    overflow-y: scroll;
}

.app-layout {
    width: 100%;
    flex: 1 0 auto;
    min-height: 100vh;
}
</style>
