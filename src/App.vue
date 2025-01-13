<template>
    <Header />
    <router-view />
    <ChangelogModal v-show="showChangelogModal" @closeChangelogModal="closeChangelogModal" />
    <ProjectModal
        v-show="showProjectModal"
        :project="selectedProjectData"
        @closeProjectModal="closeProjectModal"
    />
    <Footer v-if="!$route.meta.hideFooter" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import { RouterView } from "vue-router";

import emitter from "./eventBus.js";

import Header from "./components/layout/Header.vue";
import ChangelogModal from "./components/modals/ChangelogModal.vue";
import ProjectModal from "./components/modals/ProjectModal.vue";
import Footer from "./components/layout/Footer.vue";

const showChangelogModal = ref(false);
const showProjectModal = ref(false);
const selectedProjectData = ref(null);

const closeChangelogModal = () => {
    showChangelogModal.value = false;
};

const closeProjectModal = () => {
    showProjectModal.value = false;
};

const handleKeydown = (event) => {
    if (event.key === "Escape") {
        closeChangelogModal();
        closeProjectModal();
    }
};

onMounted(() => {
    emitter.on("show-changelog-modal", () => {
        showChangelogModal.value = true;
    });

    emitter.on("show-project-modal", (projectData) => {
        selectedProjectData.value = projectData;
        showProjectModal.value = true;
    });

    window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
    emitter.off("show-changelog-modal");
    emitter.off("show-project-modal");
    window.removeEventListener("keydown", handleKeydown);
});

watchEffect(() => {
    if (showProjectModal.value || showChangelogModal.value) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }
});
</script>

<style lang="scss">
body {
    width: 100vw;
    height: 100vh;
    min-width: 320px;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: scroll;
    background: $primary_bg;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    font-size: 16px;
    font-weight: 400;
    color: $primary_white;
    font-family: "Roboto", sans-serif;
}
</style>
