<template>
    <div class="projects_page_wrapper">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

import { useProjectsStore } from "@/stores/useProjectsStore.js";

import ProjectCard from "@/components/ui/molecules/ProjectCard.vue";

const projectsStore = useProjectsStore();

const { locale } = useI18n();

watchEffect(() => {
    projectsStore.setLocale(locale.value);
});

const projects = computed(() => projectsStore.projects);
</script>

<style lang="scss">
.projects_page_wrapper {
    padding: 36px 36px 0 36px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
}
</style>
