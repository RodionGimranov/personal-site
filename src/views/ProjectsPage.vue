<template>
    <div class="projects_page_wrapper common_page_wrapper">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import ProjectCard from "@/components/projectsComponents/ProjectCard.vue";

import projectsData from "@/data/projectsData.json";

const { locale } = useI18n();
const projects = computed(() => {
    return [...(projectsData[locale.value] || [])].sort((a, b) => b.id - a.id);
});
</script>

<style lang="scss">
.projects_page_wrapper {
    padding: 36px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
}
</style>
