<template>
    <main>
        <SideBar />
        <section class="main_content_container common_layout_style">
            <div ref="scrolledContent" class="scrolled_content">
                <router-view />
                <Footer v-if="!$route.meta.hideFooter" />
            </div>
        </section>
        <transition name="show-modal">
            <ChangelogModal v-if="isChangelogModalOpen" />
        </transition>
        <transition name="show-arrow-btn">
            <TopButton v-show="isScrolledEnough && !isChangelogModalOpen" @click="scrollToTop" />
        </transition>
        <div class="blur_mask_wrapper" v-show="!isAtBottom">
            <BlurMask />
        </div>
    </main>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { RouterView, useRouter } from "vue-router";

import SideBar from "@/components/layout/SideBar.vue";
import Footer from "@/components/layout/Footer.vue";
import BlurMask from "@/components/ui/BlurMask.vue";
import ChangelogModal from "@/components/ui/modals/ChangelogModal.vue";
import TopButton from "./components/ui/buttons/TopButton.vue";

const store = useStore();
const router = useRouter();

const isScrolledEnough = ref(false);
const isAtBottom = ref(false);
const scrolledContent = ref(null);

const isChangelogModalOpen = computed(() => store.state.modals.isChangelogModalOpen);

function handleScroll() {
    if (scrolledContent.value) {
        const el = scrolledContent.value;
        const scrollBottom = el.scrollHeight - el.scrollTop - el.clientHeight;

        isScrolledEnough.value = el.scrollTop > 300;
        isAtBottom.value = scrollBottom <= 20;
    }
}

function scrollToTop() {
    if (scrolledContent.value) {
        scrolledContent.value.scrollTo({ top: 0, behavior: "smooth" });
    }
}

onMounted(async () => {
    scrolledContent.value?.addEventListener("scroll", handleScroll);
    await router.isReady();
    handleScroll();
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
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-top: 10px;
    margin-bottom: 10px;
}

.blur_mask_wrapper {
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
