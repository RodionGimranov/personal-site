<template>
    <main>
        <SideBar />
        <section class="main_content common_layout_style">
            <div class="scrolled_content">
                <router-view />
                <Footer v-if="!$route.meta.hideFooter" />
                <BlurMask />
            </div>
        </section>
    </main>
</template>

<script setup>
import { RouterView } from "vue-router";

import SideBar from "@/components/layout/SideBar.vue";
import Footer from "@/components/layout/Footer.vue";
import BlurMask from "@/components/ui/BlurMask.vue";
</script>

<style lang="scss">
main {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
}

.main_content {
    display: flex;
    flex: 1 0 0px;
    overflow: hidden;
}

.scrolled_content {
    position: relative;
    width: 100%;
}
</style>
