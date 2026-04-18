<template>
    <div v-if="project" class="relative w-full">
        <div
            class="bg-primary-white fixed top-0 z-99 flex w-full items-start justify-start pt-6! pb-4!"
        >
            <RouterLink
                to="/projects"
                class="text-third-gray hover:text-primary-dark flex items-center justify-start gap-[2px] text-base font-medium transition duration-200"
            >
                <SvgIcon name="left-arrow-icon" />
                <span>{{ $t("projectsLocale.back_btn") }}</span>
            </RouterLink>
        </div>
        <div class="mt-16! flex max-w-[560px] flex-col items-start justify-start gap-12">
            <ProjectHeader
                :name="project.locale.name"
                :codeUrl="project.meta.link_to_code"
                :deployUrl="project.meta.link_to_deploy"
            />
            <ProjectVideoCover :videoSrc="project.meta.project_video_cover" />
            <div class="about_project_info_container">
                <p class="about_project_info_title">{{ $t("projectsLocale.description_title") }}</p>
                <p class="about_project_info_subtitle">{{ project.locale.description }}</p>
            </div>
            <div class="about_project_info_container">
                <p class="about_project_info_title">{{ $t("projectsLocale.role_title") }}</p>
                <p class="about_project_info_subtitle">{{ project.locale.role }}</p>
            </div>
            <div class="about_project_info_container">
                <p class="about_project_info_title">
                    {{ $t("projectsLocale.areas_of_responsibility_titl") }}
                </p>
                <ul>
                    <li
                        v-for="(area, index) in project.locale.areas_of_responsibility"
                        :key="index"
                        class="about_project_info_subtitle mb-1! ml-[14px]! list-disc last:mb-0!"
                    >
                        {{ area.area }}
                    </li>
                </ul>
            </div>
            <div class="about_project_info_container">
                <p class="about_project_info_title">
                    {{ $t("projectsLocale.context_purpose_title") }}
                </p>
                <p class="about_project_info_subtitle">{{ project.locale.context_purpose }}</p>
            </div>
            <ProjectTechnologies :technologies="project.technologies" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useProjectsStore } from "@/stores/useProjectsStore";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import ProjectHeader from "@/components/AboutProjectPage/ProjectHeader.vue";
import ProjectVideoCover from "@/components/AboutProjectPage/ProjectVideoCover.vue";
import ProjectTechnologies from "@/components/AboutProjectPage/ProjectTechnologies.vue";

const route = useRoute();
const router = useRouter();

const projectsStore = useProjectsStore();

const project = computed(() => {
    const found = projectsStore.getProjectById(Number(route.params.id));

    if (!found) {
        router.push({ name: "notFound" });
        return null;
    }

    return found;
});
</script>

<style lang="scss"></style>
