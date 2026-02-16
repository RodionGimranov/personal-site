<template>
    <div class="flex flex-wrap items-start justify-start gap-[30px]">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script setup lang="ts">
import { computed, watchEffect, type ComputedRef } from "vue";
import { useI18n } from "vue-i18n";

import type { Locale } from "@/types";
import { useProjectsStore } from "@/stores/useProjectsStore";
import ProjectCard from "@/components/ui/molecules/ProjectCard.vue";

interface Project {
    id: string | number;
    [key: string]: unknown;
}

const projectsStore = useProjectsStore();

const { locale } = useI18n<{ message: unknown }, Locale>();

watchEffect((): void => {
    projectsStore.setLocale(locale.value);
});

const projects: ComputedRef<Project[]> = computed(() => {
    return projectsStore.projects as Project[];
});
</script>

<style lang="scss"></style>
