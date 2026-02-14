<template>
    <div class="relative flex flex-col justify-start items-start">
        <div
            class="fixed top-0 z-99 pt-6! pb-4! flex justify-start items-start test common_width_size bg-primary-white"
        >
            <RouterLink
                to="/projects"
                class="transition duration-200 text-base font-medium text-third-gray flex justify-start items-center gap-0.5 hover:text-primary-dark"
            >
                <SvgIcon name="left-arrow-icon" />
                <span>{{ $t("projectsLocale.back_btn") }}</span>
            </RouterLink>
        </div>
        <ProjectHeader
            :name="project.name"
            :codeUrl="project.link_to_code"
            :deployUrl="project.link_to_deploy"
            class="mt-16!"
        />
        <ProjectVideoCover :videoSrc="project.project_video_cover" />
        <ProjectDescription :description="project.description" />
        <ProjectRole :role="project.role" />
        <ProjectResponsibilities :areas="project.areas_of_responsibility" />
        <ProjectContext :context="project.context_purpose" />
        <ProjectTechnologies :technologies="project.technologies" />
    </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import type { Locale, Project } from "@/types";
import { useProjectsStore } from "@/stores/useProjectsStore";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import ProjectHeader from "@/components/AboutProjectPage/ProjectHeader.vue";
import ProjectVideoCover from "@/components/AboutProjectPage/ProjectVideoCover.vue";
import ProjectDescription from "@/components/AboutProjectPage/ProjectDescription.vue";
import ProjectRole from "@/components/AboutProjectPage/ProjectRole.vue";
import ProjectResponsibilities from "@/components/AboutProjectPage/ProjectResponsibilities.vue";
import ProjectContext from "@/components/AboutProjectPage/ProjectContext.vue";
import ProjectTechnologies from "@/components/AboutProjectPage/ProjectTechnologies.vue";

const route = useRoute();
const router = useRouter();

const projectsStore = useProjectsStore();

const { locale } = useI18n<{ message: unknown }, Locale>();

watchEffect((): void => {
    projectsStore.setLocale(locale.value);
});

watchEffect((): void => {
    const idParam = route.params.id;

    if (typeof idParam === "string") {
        projectsStore.selectProjectById(Number(idParam));
    }
});

const project = computed<Project>(() => {
    return projectsStore.selectedProject as Project;
});

watchEffect((): void => {
    if (!projectsStore.selectedProject) {
        router.replace("/Error");
    }
});
</script>

<style lang="scss"></style>
