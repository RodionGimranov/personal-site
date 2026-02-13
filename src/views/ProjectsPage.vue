<template>
    <div class="flex justify-start items-start flex-wrap gap-7.5">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

import { useProjectsStore } from "@/stores/useProjectsStore";

import ProjectCard from "@/components/ui/molecules/ProjectCard.vue";

const projectsStore = useProjectsStore();

const { locale } = useI18n();

watchEffect(() => {
    projectsStore.setLocale(locale.value);
});

const projects = computed(() => projectsStore.projects);
</script>

<style lang="scss"></style>
