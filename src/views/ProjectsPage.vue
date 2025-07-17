<template>
    <div class="projects_page_wrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
</template>

<script setup>
import ProjectCard from "@/components/projectsComponents/ProjectCard.vue";
</script>

<style lang="scss">
.projects_page_wrapper {
    width: 100%;
    padding: 36px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
}
</style>
