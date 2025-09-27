<template>
    <main>
        <SideBar />
        <section class="main_content_container common_layout_style">
            <Header />
            <div ref="scrolledContent" class="scrolled_content">
                <router-view />
                <Footer v-if="!$route.meta.hideFooter" />
            </div>
        </section>
        <transition name="show-modal">
            <ChangelogModal v-if="isChangelogModalOpen" />
            <BackgroundModal v-else-if="isBackgroundModalOpen" />
        </transition>
        <transition name="show-arrow-btn">
            <TopButton v-show="showTopButton" @click="scrollToTop" />
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
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import ChangelogModal from "@/components/ui/modals/ChangelogModal.vue";
import BackgroundModal from "@/components/ui/modals/BackgroundModal.vue";
import TopButton from "./components/ui/buttons/TopButton.vue";
import BlurMask from "@/components/ui/BlurMask.vue";

const store = useStore();
const router = useRouter();

const isScrolledEnough = ref(false);
const isAtBottom = ref(false);
const scrolledContent = ref(null);

const isChangelogModalOpen = computed(() => store.state.modals.isChangelogModalOpen);
const isBackgroundModalOpen = computed(() => store.state.modals.isBackgroundModalOpen);

const showTopButton = computed(
    () => (isScrolledEnough.value && !isChangelogModalOpen.value) || isBackgroundModalOpen.value,
);

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
    margin: 10px 0;
    overflow-x: hidden;
    overflow-y: scroll;
}

.blur_mask_wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc(100% - 272px);
    height: 156px;
    z-index: 2;
    overflow: hidden;
    border-radius: 16px;
    pointer-events: none;
}
</style>
