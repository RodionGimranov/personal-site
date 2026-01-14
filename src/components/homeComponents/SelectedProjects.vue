<template>
    <div class="selected_projects_section common_home_section_style">
        <p class="common_home_section_title">
            {{ $t("message.projects_home_section_title") }}
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

<script setup>
import { watchEffect, computed } from "vue";
import { useI18n } from "vue-i18n";

import { useProjectsStore } from "@/stores/useProjectsStore.js";

import ProjectCard from "@/components/ui/molecules/ProjectCard.vue";

const projectsStore = useProjectsStore();
const { locale } = useI18n();

watchEffect(() => {
    projectsStore.setLocale(locale.value);
});

const projects = computed(() => projectsStore.getProjectsByIds([0]));
</script>

<style lang="scss">
.selected_projects_section {
    align-items: flex-start !important;
}
</style>
