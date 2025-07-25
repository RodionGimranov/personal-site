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
        <transition name="show-modal">
            <ChangelogModal v-if="isChangelogModalOpen" />
        </transition>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { RouterView } from "vue-router";

import SideBar from "@/components/layout/SideBar.vue";
import Footer from "@/components/layout/Footer.vue";
import BlurMask from "@/components/ui/BlurMask.vue";
import ChangelogModal from "@/components/ui/modal/ChangelogModal.vue";

const store = useStore();
const isChangelogModalOpen = computed(() => store.state.modals.isChangelogModalOpen);
</script>

<style lang="scss">
body {
    background: var(--primary-white-bg);
}

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
