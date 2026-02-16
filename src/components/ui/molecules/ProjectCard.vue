<template>
    <RouterLink
        v-if="project"
        :to="{ path: `/About-Project/${project.id}` }"
        class="project_card_container commom_card_style relative flex cursor-pointer items-center justify-center overflow-hidden"
        :style="{ width: projectWidth, height: projectHeight }"
    >
        <video
            v-if="project.project_video_cover"
            class="absolute h-full w-full object-cover"
            preload="metadata"
            autoplay
            loop
            muted
            playsinline
        >
            <source :src="project.project_video_cover" type="video/mp4" />
            {{ $t("projectsLocale.project_video_text") }}
        </video>
        <Skeleton v-else width="100%" height="100%" />
        <div
            class="project_name_container _glass_effect absolute bottom-3 left-3 flex items-center justify-start gap-1 rounded-full py-1! pr-3! pl-1.5! opacity-0 transition-all duration-200"
        >
            <SvgIcon name="eye-icon" />
            <p class="text-primary-white font-normal" :style="{ fontSize: projectNameSize }">
                {{ project.name }}
            </p>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import type { Project } from "@/types";

import Skeleton from "@/components/ui/atoms/Skeleton.vue";
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

withDefaults(
    defineProps<{
        project?: Project;
        projectWidth?: string;
        projectHeight?: string;
        projectNameSize?: string;
    }>(),
    {
        projectWidth: "515px",
        projectHeight: "325px",
        projectNameSize: "18px",
    },
);
</script>

<style lang="scss">
.project_card_container:hover .project_name_container {
    opacity: 1;
}
</style>
