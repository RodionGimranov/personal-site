<template>
    <div class="common_home_section_style items-start!">
        <p class="common_home_section_title">
            {{ $t("home.projects_home_section_title") }}
        </p>
        <div class="flex w-full items-start justify-start gap-[50px]">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useProjectsStore } from "@/stores/useProjectsStore";

import ProjectCard from "@/components/ui/molecules/ProjectCard.vue";

const projectsStore = useProjectsStore();

const FEATURED_PROJECT_IDS = [1];

const projects = computed(() =>
    projectsStore.allProjects.filter((p) => FEATURED_PROJECT_IDS.includes(p.id)),
);
</script>

<style lang="scss"></style>
