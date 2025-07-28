<template>
    <main>
        <SideBar />
        <section class="main_content common_layout_style">
            <div class="scrolled_content">
                <router-view />
                <Footer v-if="!$route.meta.hideFooter" />
            </div>
        </section>
        <div class="blur_mask_wrapprer">
            <BlurMask />
        </div>
        <transition name="show-modal">
            <ChangelogModal v-if="isChangelogModalOpen" />
        </transition>
        <transition name="show-arrow-btn">
            <TopButton v-show="isScrolledEnough" @click="scrollToTop" />
        </transition>
    </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { RouterView } from "vue-router";

import SideBar from "@/components/layout/SideBar.vue";
import Footer from "@/components/layout/Footer.vue";
import BlurMask from "@/components/ui/BlurMask.vue";
import ChangelogModal from "@/components/ui/modal/ChangelogModal.vue";
import TopButton from "./components/ui/button/TopButton.vue";

const store = useStore();

const isScrolledEnough = ref(false);
// const -here will be name for scrolled_content tag- = ref(null);

const isChangelogModalOpen = computed(() => store.state.modals.isChangelogModalOpen);


</script>

<style lang="scss">
body {
    background: var(--primary-white-bg);
}

main {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
}

.main_content {
    position: relative;
    display: flex;
    flex: 1 0 0px;
    overflow: hidden;
}

.blur_mask_wrapprer {
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc(100% - 276px);
    height: 156px;
    z-index: 2;
    overflow: hidden;
    border-radius: 16px;
    pointer-events: none;
}

.scrolled_content {
    position: relative;
    width: 100%;
}
</style>
