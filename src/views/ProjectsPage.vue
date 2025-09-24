<template>
    <div class="projects_page_wrapper common_page_wrapper">
        <ProjectCard v-for="project in project" :key="project.id" :project="project" />
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import ProjectCard from "@/components/ui/cards/ProjectCard.vue";

import projects from "@/data/projects.json";

const { locale } = useI18n();

const project = computed(() => {
    return [...(projects[locale.value] || [])].sort((a, b) => b.id - a.id);
});
</script>

<style lang="scss">
.projects_page_wrapper {
    padding: 6px 36px 0 36px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
}
</style>
