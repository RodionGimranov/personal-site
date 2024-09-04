<template>
    <main class="home_page_container">
        <section class="home_intro_section">
            <IntroTextBlock />
        </section>
        <BioTextBlock />
        <section class="home_section">
            <p class="home_section_title">Skills</p>
            <SkillsBlock />
        </section>
        <section class="home_section">
            <p class="home_section_title">Projects</p>
            <ProjectsBlock @selectedProject="openProjectModal" />
        </section>
        <section class="home_section">
            <OutroTextBlock />
        </section>
    </main>
    <ProjectModal
        v-show="isCommonCardOpen"
        :project="selectedProject"
        @closeCommonCard="closeCommonCard"
    />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";

import IntroTextBlock from "../components/homePageComponents/IntroTextBlock.vue";
import BioTextBlock from "../components/homePageComponents/BioTextBlock.vue";
import SkillsBlock from "../components/homePageComponents/SkillsBlock.vue";
import ProjectsBlock from "../components/homePageComponents/ProjectsBlock.vue";
import OutroTextBlock from "../components/homePageComponents/OutroTextBlock.vue";
import ProjectModal from "../components/ProjectModal.vue";

const isCommonCardOpen = ref(false);
const selectedProject = ref(null);

const openProjectModal = (project) => {
    selectedProject.value = project;
    isCommonCardOpen.value = true;
};

const closeCommonCard = () => {
    isCommonCardOpen.value = false;
};

const handleKeydown = (event) => {
    if (event.key === "Escape") {
        closeCommonCard();
    }
};

onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
});

watchEffect(() => {
    if (isCommonCardOpen.value) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }
});
</script>

<style lang="scss">
.home_page_container {
    width: 1200px;
    margin-bottom: 150px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 200px;
}

.home_intro_section {
    width: 100%;
    height: 85vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home_section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.home_section_title {
    margin-bottom: 20px;
    font-size: 38px;
    font-weight: 500;
    color: $primary_white;
}
</style>
