<template>
    <div class="flex w-full flex-wrap items-start justify-start gap-[30px]">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useProjectsStore } from "@/stores/useProjectsStore";

import ProjectCard from "@/components/ui/molecules/ProjectCard.vue";

const projectsStore = useProjectsStore();

const projects = computed(() => projectsStore.allProjects);
</script>

<style lang="scss"></style>
