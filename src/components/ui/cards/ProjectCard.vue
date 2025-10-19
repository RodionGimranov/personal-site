<template>
    <RouterLink
        :to="`/About-Project/${project.id}`"
        class="project_card_container"
        :style="{ width: projectWidth, height: projectHeight }"
    >
        <video
            v-if="project.project_video_cover"
            class="video_cover"
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
        <div class="project_name_container _glass_effect">
            <SvgIcon name="eye-icon" />
            <p class="project_name" :style="{ fontSize: projectNameSize }">
                {{ project.name }}
            </p>
        </div>
    </RouterLink>
</template>

<script setup>
import Skeleton from "@/components/ui/Skeleton/Skeleton.vue";
import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";

defineProps({
    project: {
        type: Object,
        required: true,
    },
    projectWidth: { type: String, default: "515px" },
    projectHeight: { type: String, default: "325px" },
    projectNameSize: { type: String, default: "18px" },
});
</script>

<style lang="scss">
.project_card_container {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 30px;
    background: $fourth_gray;

    display: flex;
    justify-content: center;
    align-items: center;
}

.video_cover {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.project_name_container {
    position: absolute;
    bottom: 12px;
    left: 12px;
    opacity: 0;
    transition: 0.2s;
    border-radius: 100px;
    padding: 4px 12px 4px 6px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
}

.project_card_container:hover .project_name_container {
    opacity: 1;
}

.project_name {
    font-weight: 400;
    color: $primary_white;
}

.dark_background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.2s;
}
</style>
