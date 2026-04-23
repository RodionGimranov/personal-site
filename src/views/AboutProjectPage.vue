<template>
    <div v-if="project" class="relative flex w-full justify-center">
        <div class="flex max-w-[610px] flex-col items-start justify-start gap-[46px]">
            <ProjectHeader
                :name="project.locale.name"
                :iconUrl="project.meta.project_large_icon"
                :codeUrl="project.meta.link_to_code"
                :deployUrl="project.meta.link_to_deploy"
            />
            <ProjectVideoCover :videoSrc="project.meta.project_video_cover" />
            <div class="about_project_info_container">
                <p class="about_project_info_title">{{ $t("projectsLocale.overview_title") }}</p>
                {{ project.locale.overview }}
            </div>
            <div class="about_project_info_container">
                <p class="about_project_info_title">{{ $t("projectsLocale.purpose_title") }}</p>
                {{ project.locale.purpose }}
            </div>
            <div class="about_project_info_container">
                <p class="about_project_info_title">
                    {{ $t("projectsLocale.key_features_title") }}
                </p>
                <ul>
                    <li
                        v-for="(item, index) in project.locale.key_features"
                        :key="index"
                        class="about_project_info_subtitle mb-1! ml-[14px]! list-disc last:mb-0!"
                    >
                        {{ item.feature }}
                    </li>
                </ul>
            </div>
            <div class="about_project_info_container">
                <p class="about_project_info_title">{{ $t("projectsLocale.role_title") }}</p>
                <p class="about_project_info_subtitle">{{ project.locale.role }}</p>
            </div>
            <div class="about_project_info_container">
                <p class="about_project_info_title">
                    {{ $t("projectsLocale.contribution_title") }}
                </p>
                <p class="about_project_info_subtitle">{{ project.locale.contribution }}</p>
            </div>
            <ProjectTechnologies :technologies="project.technologies" />
            <div class="about_project_info_container">
                <p class="about_project_info_title">{{ $t("projectsLocale.results_title") }}</p>
                <p class="about_project_info_subtitle">{{ project.locale.results.text }}</p>
                <div
                    v-if="project.locale.results.metrics"
                    class="mt-5! flex w-full flex-wrap gap-4"
                >
                    <MetricCard
                        v-for="(metric, index) in project.locale.results.metrics"
                        :key="index"
                        :label="metric.label"
                        :value="metric.value"
                    />
                </div>
                <p class="text-third-gray text-sm font-normal">
                    {{ $t("projectsLocale.last_data_update") }}
                    {{ project.locale.last_data_update }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useProjectsStore } from "@/stores/useProjectsStore";

import ProjectHeader from "@/components/AboutProjectPage/ProjectHeader.vue";
import ProjectVideoCover from "@/components/AboutProjectPage/ProjectVideoCover.vue";
import ProjectTechnologies from "@/components/AboutProjectPage/ProjectTechnologies.vue";
import MetricCard from "@/components/AboutProjectPage/MetricCard.vue";

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
