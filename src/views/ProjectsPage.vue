<template>
    <main class="projects_page_container">
        <p class="page_title projects_page_title">Projects</p>
        <ProjectCard />
    </main>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
</script>

<style lang="scss">
.projects_page_container {
    width: 1200px;
    margin-bottom: 150px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.projects_page_title {
    margin-top: 20vh;
}
</style>
