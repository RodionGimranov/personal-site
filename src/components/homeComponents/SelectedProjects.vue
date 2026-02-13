<template>
    <div class="common_home_section_style items-start!">
        <p class="common_home_section_title">
            {{ $t("home.projects_home_section_title") }}
        </p>
        <div class="w-full flex justify-start items-start gap-12.5">
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
import { useLanguageStore } from "@/stores/useLanguageStore";

import ProjectCard from "@/components/ui/molecules/ProjectCard.vue";

const projectsStore = useProjectsStore();
const languageStore = useLanguageStore();

const projects = computed<Project[]>(() => projectsStore.getProjectsByIds([0]));

watch(
    () => languageStore.currentLocale,
    (locale) => {
        projectsStore.setLocale(locale);
    },
    { immediate: true },
);
</script>

<style lang="scss"></style>
