<template>
    <div class="selected_projects_section common_home_section_style">
        <p class="common_home_section_title">
            {{ $t("message.projects_home_section_title") }}
        </p>
        <div class="selected_projects_container">
            <ProjectCard
                v-for="project in selectedProjects"
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
import { useProjects } from "@/composables/useProjects.js";

import ProjectCard from "@/components/ui/cards/ProjectCard.vue";

const { getProjectsByIds } = useProjects();

const selectedProjects = getProjectsByIds([0, 1]);
</script>

<style lang="scss">
.selected_projects_section {
    align-items: flex-start !important;
}

.selected_projects_container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 21px;
}
</style>
