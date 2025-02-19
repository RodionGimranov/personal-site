<template>
    <main class="home_page_container">
        <section class="home_intro_section">
            <IntroTextBlock />
        </section>
        <BioTextBlock />
        <section class="home_section anim_section">
            <p class="home_section_title">Skills</p>
            <SkillsBlock />
        </section>
        <section class="home_section anim_section">
            <p class="home_section_title">Projects</p>
            <ProjectsBlock />
        </section>
        <section class="home_section anim_section">
            <OutroTextBlock />
        </section>
    </main>
</template>

<script setup>
import IntroTextBlock from "../components/homePageComponents/IntroTextBlock.vue";
import BioTextBlock from "../components/homePageComponents/BioTextBlock.vue";
import SkillsBlock from "../components/homePageComponents/SkillsBlock.vue";
import ProjectsBlock from "../components/homePageComponents/ProjectsBlock.vue";
import OutroTextBlock from "../components/homePageComponents/OutroTextBlock.vue";
</script>

<style lang="scss">
.home_page_container {
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.home_section_title {
    margin-bottom: 20px;
    font-size: 34px;
    font-weight: 500;
    color: $primary_white;
}
</style>
