<template>
    <main class="home_page_container">
        <section class="home_intro_section" ref="runTextScaleAnimation">
            <HomeIntroText />
        </section>
        <HomeBioText />
        <section class="home_section">
            <p class="home_section_title">Skills</p>
            <HomeSkills />
        </section>
        <section class="home_section">
            <p class="home_section_title">Projects</p>
            <HomeProjects @selectedProject="openProjectModal" />
        </section>
        <section class="home_section">
            <HomeOutroText />
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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HomeIntroText from "../components/homePageComponents/HomeIntroText.vue";
import HomeBioText from "../components/homePageComponents/HomeBioText.vue";
import HomeSkills from "../components/homePageComponents/HomeSkills.vue";
import HomeProjects from "../components/homePageComponents/HomeProjects.vue";
import HomeOutroText from "../components/homePageComponents/HomeOutroText.vue";
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

gsap.registerPlugin(ScrollTrigger);

const runTextScaleAnimation = ref(null);

onMounted(() => {
    gsap.to(runTextScaleAnimation.value, {
        scrollTrigger: {
            trigger: ".home_intro_section",
            start: "top top%",
            end: "bottom 15%",
            scrub: true,
            pin: true,
            pinSpacing: false,
        },
        scale: 2,
        autoAlpha: 0,
    });

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
    overflow: hidden;
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
    color: $primary_white_color;
}
</style>
