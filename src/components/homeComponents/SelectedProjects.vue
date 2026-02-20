<template>
    <div class="common_home_section_style items-start!">
        <p class="common_home_section_title">
            {{ $t("home.projects_home_section_title") }}
        </p>
        <div class="flex w-full items-start justify-start gap-12.5">
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :project="project"
                projectWidth="320px"
                projectHeight="206px"
                projectNameSize="16px"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";

import type { Project } from "@/types";
import { useProjectsStore } from "@/stores/useProjectsStore";
import { usePreferencesStore } from "@/stores/usePreferencesStore";

import ProjectCard from "@/components/ui/molecules/ProjectCard.vue";

const projectsStore = useProjectsStore();
const preferencesStore = usePreferencesStore();

const projects = computed<Project[]>(() => projectsStore.getProjectsByIds([2, 0]));

watch(
    () => preferencesStore.currentLocale,
    (locale) => {
        projectsStore.setLocale(locale);
    },
    { immediate: true },
);
</script>

<style lang="scss"></style>
