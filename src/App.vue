<template>
    <Header />
    <router-view />
    <ChangelogModal v-show="showChangelogModal" @closeChangelogModal="closeChangelogModal" />
    <ProjectModal
        v-show="showProjectModal"
        :project="selectedProjectData"
        @closeProjectModal="closeProjectModal"
    />
    <Footer />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import { RouterView } from "vue-router";
import emitter from "./eventBus.js";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import ChangelogModal from "./components/ChangelogModal.vue";
import ProjectModal from "./components/ProjectModal.vue";

const showChangelogModal = ref(false);
const showProjectModal = ref(false);
const selectedProjectData = ref(null);;

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
    window.removeEventListener("keydown", handleKeydown);
});

watchEffect(() => {
    if (showChangelogModal.value || showProjectModal.value) {
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

    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: $primary_white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>
