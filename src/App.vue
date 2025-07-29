<template>
    <main>
        <SideBar />
        <section class="main_content common_layout_style">
            <div ref="scrolledContent" class="scrolled_content">
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
            <TopButton v-show="isScrolledEnough && !isChangelogModalOpen" @click="scrollToTop" />
        </transition>
    </main>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { RouterView } from "vue-router";

import SideBar from "@/components/layout/SideBar.vue";
import Footer from "@/components/layout/Footer.vue";
import BlurMask from "@/components/ui/BlurMask.vue";
import ChangelogModal from "@/components/ui/modal/ChangelogModal.vue";
import TopButton from "./components/ui/button/TopButton.vue";

const store = useStore();

const isScrolledEnough = ref(false);
const scrolledContent = ref(null);

const isChangelogModalOpen = computed(() => store.state.modals.isChangelogModalOpen);

function handleScroll() {
    if (scrolledContent.value) {
        isScrolledEnough.value = scrolledContent.value.scrollTop > 300;
    }
}

function scrollToTop() {
    if (scrolledContent.value) {
        scrolledContent.value.scrollTo({ top: 0, behavior: "smooth" });
    }
}

onMounted(() => {
    scrolledContent.value?.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    scrolledContent.value?.removeEventListener("scroll", handleScroll);
});
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

.scrolled_content {
    position: relative;
    width: 100%;
    overflow-y: auto;
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
</style>
