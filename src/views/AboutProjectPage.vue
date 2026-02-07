<template>
    <div class="relative px-9! flex flex-col justify-start items-start">
        <div
            class="sticky top-0 z-99 py-4! bg-primary-white flex justify-start items-start common_width_size"
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
        />
        <ProjectVideoCover :videoSrc="project.project_video_cover" />
        <ProjectDescription :description="project.description" />
        <ProjectRole :role="project.role" />
        <ProjectResponsibilities :areas="project.areas_of_responsibility" />
        <ProjectContext :context="project.context_purpose" />
        <ProjectTechnologies :technologies="project.technologies" />
    </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { useProjectsStore } from "@/stores/useProjectsStore";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

import ProjectHeader from "@/components/aboutProjectPage/ProjectHeader.vue";
import ProjectVideoCover from "@/components/aboutProjectPage/ProjectVideoCover.vue";
import ProjectDescription from "@/components/aboutProjectPage/ProjectDescription.vue";
import ProjectRole from "@/components/aboutProjectPage/ProjectRole.vue";
import ProjectResponsibilities from "@/components/aboutProjectPage/ProjectResponsibilities.vue";
import ProjectContext from "@/components/aboutProjectPage/ProjectContext.vue";
import ProjectTechnologies from "@/components/aboutProjectPage/ProjectTechnologies.vue";

const route = useRoute();
const router = useRouter();

const projectsStore = useProjectsStore();

const { locale } = useI18n();

watchEffect(() => {
    projectsStore.setLocale(locale.value);
});

watchEffect(() => {
    projectsStore.selectProjectById(route.params.id);
});

const project = computed(() => projectsStore.selectedProject);

watchEffect(() => {
    if (project.value === null) {
        router.replace("/Error");
    }
});
</script>

<style lang="scss"></style>
