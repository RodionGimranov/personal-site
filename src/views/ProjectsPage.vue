<template>
    <div class="projects_page_wrapper common_page_wrapper">
        <ProjectCard v-for="project in allProjects" :key="project.id" :project="project" />
    </div>
</template>

<script setup>
import { useProjects } from "@/composables/useProjects.js";

import ProjectCard from "@/components/ui/cards/ProjectCard.vue";

const { projectsList } = useProjects();

const allProjects = projectsList;
</script>

<style lang="scss">
.projects_page_wrapper {
    padding: 26px 36px 0 36px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
}
</style>
