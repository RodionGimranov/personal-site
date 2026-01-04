<template>
    <div class="about_project_page_wrapper">
        <div class="back_to_projects_list_btn_container about_project_common_width_size">
            <RouterLink :to="backRoute" class="back_to_projects_list_btn">
                <SvgIcon name="left-arrow-icon" />
                <span>{{ $t("message.back_btn") }}</span>
            </RouterLink>
        </div>
        <div class="about_project_header about_project_common_width_size">
            <p class="about_project_large_name">{{ project.name }}</p>
            <div class="link_to_prject_container">
                <a :href="project.link_to_code" target="_blank">
                    <Button
                        as="span"
                        :buttonText="$t('message.source_code_btn')"
                        :disabled="isEmptyLink(project.link_to_code)"
                    />
                </a>
                <a :href="project.link_to_deploy" target="_blank">
                    <Button
                        as="span"
                        variant="_blue"
                        :buttonText="$t('message.visit_btn')"
                        :disabled="isEmptyLink(project.link_to_deploy)"
                    />
                </a>
            </div>
        </div>
        <div class="large_video_cover_container">
            <video
                v-if="project.project_video_cover"
                class="large_video_cover"
                preload="metadata"
                autoplay
                loop
                muted
                playsinline
            >
                <source :src="project.project_video_cover" type="video/mp4" />
                {{ $t("message.project_video_text") }}
            </video>
            <Skeleton v-else width="100%" height="100%" />
        </div>
        <div class="about_project_info_container">
            <p class="about_project_info_title">{{ $t("message.description_title") }}</p>
            <p class="about_project_info_subtitle about_project_common_width_size">
                {{ project.description }}
            </p>
        </div>
        <div class="about_project_info_container">
            <p class="about_project_info_title">{{ $t("message.role_title") }}</p>
            <p class="about_project_info_subtitle">{{ project.role }}</p>
        </div>
        <div class="about_project_info_container">
            <p class="about_project_info_title">{{ $t("message.areas_of_responsibility_titl") }}</p>
            <ul class="areas_list">
                <li
                    class="about_project_info_subtitle about_project_common_width_size"
                    v-for="(area, index) in project.areas_of_responsibility"
                    :key="index"
                >
                    {{ area.area }}
                </li>
            </ul>
        </div>
        <div class="about_project_info_container">
            <p class="about_project_info_title">{{ $t("message.context_purpose_title") }}</p>
            <p class="about_project_info_subtitle about_project_common_width_size">
                {{ project.context_purpose }}
            </p>
        </div>
        <div class="about_project_info_container">
            <p class="about_project_info_title">{{ $t("message.technologies_title") }}</p>
            <div class="technologies_list about_project_common_width_size">
                <TechnologyTag
                    v-for="(tech, index) in project.technologies"
                    :key="index"
                    :label="tech.name"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { useProjectsStore } from "@/stores/useProjectsStore.js";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import Button from "@/components/ui/atoms/Button.vue";
import Skeleton from "@/components/ui/atoms/Skeleton.vue";
import TechnologyTag from "@/components/ui/atoms/TechnologyTag.vue";

const route = useRoute();
const router = useRouter();

const projectsStore = useProjectsStore();

const { locale } = useI18n();

function isEmptyLink(link) {
    return !link || link === "0";
}

const backRoute = computed(() => {
    switch (route.query.from) {
        case "projects":
            return "/Projects";
        case "home":
        default:
            return "/";
    }
});

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

<style lang="scss">
.about_project_page_wrapper {
    position: relative;
    padding: 0 36px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.back_to_projects_list_btn_container {
    position: sticky;
    top: 0;
    z-index: 99;
    padding: 16px 0 16px 0;
    background: $primary_white;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.back_to_projects_list_btn {
    transition: 0.2s;
    font-size: 16px;
    font-weight: 500;
    color: $third_gray;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2px;

    &:hover {
        color: $primary_dark;
    }
}

.about_project_header {
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.about_project_large_name {
    font-size: 28px;
    font-weight: 500;
    color: $primary_dark;
}

.link_to_prject_container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 10px;
}

.large_video_cover_container {
    width: 560px;
    height: 315px;
    overflow: hidden;
    object-fit: cover;
    margin-bottom: 32px;
    border-radius: 30px;
    background: $fifth_white;
    border: 1px solid $ninth_gray;
}

.large_video_cover {
    width: 100%;
    height: 100%;
}

.about_project_info_container {
    width: 100%;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;

    &:last-child {
        margin-bottom: 0;
    }
}

.about_project_info_title {
    font-size: 16px;
    font-weight: 500;
    color: $primary_gray;
}

.areas_list {
    margin: 0;
    padding-left: 26px;

    &li {
        margin: 0;
        padding: 0;
    }
}

.about_project_info_subtitle {
    font-size: 16px;
    font-weight: 400;
    color: $primary_dark;
}

.technologies_list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 6px;
}

.about_project_common_width_size {
    width: 560px;
}
</style>
