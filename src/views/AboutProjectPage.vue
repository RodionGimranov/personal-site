<template>
    <div class="about_project_page_wrapper common_page_wrapper">
        <div class="back_to_projects_list_btn_container">
            <RouterLink to="/Projects" class="back_to_projects_list_btn">
                <SvgIcon name="left-arrow-icon" />
                <span>{{ $t("message.back_btn") }}</span>
            </RouterLink>
        </div>
        <div class="about_project_header">
            <p class="about_project_large_name">{{ project.name }}</p>
            <div class="link_to_prject_container">
                <Button
                    buttonType="a"
                    :href="project.link_to_deploy"
                    :buttonText="$t('message.visit_btn')"
                />
                <Button
                    variant="blue-v1"
                    buttonType="a"
                    :href="project.link_to_code"
                    :buttonText="$t('message.source_code_btn')"
                />
            </div>
        </div>
        <video
            class="large_video_cover common_width_size"
            preload="metadata"
            autoplay
            loop
            muted
            playsinline
            loading="lazy"
        >
            <source :src="project.project_cover" type="video/mp4" />
            {{ $t("message.project_video_text") }}
        </video>
        <div class="about_project_info_container">
            <p class="about_project_info_title">{{ $t("message.description_title") }}</p>
            <p class="about_project_info_subtitle common_width_size">{{ project.description }}</p>
        </div>
        <div class="about_project_info_container">
            <p class="about_project_info_title">{{ $t("message.technologies_title") }}</p>
            <div class="technologies_list common_width_size">
                <span
                    v-for="(tech, index) in project.technologies"
                    :key="index"
                    class="technology_item"
                >
                    {{ tech.name }}
                </span>
            </div>
        </div>
        <div class="about_project_info_container">
            <p class="about_project_info_title">{{ $t("message.role_title") }}</p>
            <p class="about_project_info_subtitle">{{ project.role }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";
import Button from "@/components/ui/buttons/Button.vue";

import projects from "@/data/projects.json";

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();

const project = computed(() => {
    const id = Number(route.params.id);
    return projects[locale.value].find((p) => p.id === id) || null;
});

watchEffect(() => {
    if (project.value === null) {
        router.replace("/Error");
    }
});
</script>

<style lang="scss">
.about_project_page_wrapper {
    position: relative;
    padding: 0px 64px 36px 64px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.back_to_projects_list_btn_container {
    position: sticky;
    top: -16px;
    width: 100%;
    z-index: 99;
    background: $primary_white;
    padding: 36px 0px 24px 0px;

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
    min-width: 560px !important;
    margin-bottom: 32px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
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

.large_video_cover {
    height: 315px;
    overflow: hidden;
    object-fit: cover;
    margin-bottom: 32px;
    border-radius: 30px;
    background: $fourth_gray;
}

.technologies_list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 6px;
}

.technology_item {
    padding: 4px 8px;
    border-radius: 100px;
    background: $secondary_blue;

    font-size: 14px;
    font-weight: 500;
    color: $primary_blue;

    display: flex;
    justify-content: center;
    align-items: center;
}

.about_project_info_container {
    width: 100%;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;

    &:last-child {
        margin-bottom: 0;
    }
}

.about_project_info_title {
    font-size: 16px;
    font-weight: 400;
    color: $primary_gray;
}

.about_project_info_subtitle {
    font-size: 16px;
    font-weight: 400;
    color: $primary_dark;
}

.common_width_size {
    width: 560px;
}
</style>
