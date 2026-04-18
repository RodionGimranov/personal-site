<template>
    <RouterLink
        v-if="project"
        :to="{ name: 'aboutProjectPage', params: { id: project.id } }"
        class="project_card_container commom_card_style relative flex h-[206px] w-80 cursor-pointer items-center justify-center overflow-hidden"
    >
        <video
            v-if="project.meta.project_video_cover"
            class="absolute h-full w-full object-cover"
            preload="metadata"
            autoplay
            loop
            muted
            playsinline
        >
            <source :src="project.meta.project_video_cover" type="video/mp4" />
            {{ $t("projectsLocale.project_video_text") }}
        </video>
        <Skeleton v-else width="100%" height="100%" />
        <div
            class="project_name_container _glass_effect absolute bottom-3 left-3 flex items-center justify-start gap-1 rounded-full py-1! pr-3! pl-[6px]! opacity-0 transition-all duration-200"
        >
            <SvgIcon name="eye-icon" />
            <p class="text-primary-white text-base font-normal">
                {{ project.locale.name }}
            </p>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import type { Project, ProjectLocale } from "@/types";

import Skeleton from "@/components/ui/atoms/Skeleton.vue";
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

defineProps<{
    project?: Project & { locale: ProjectLocale };
}>();
</script>

<style lang="scss">
.project_card_container:hover .project_name_container {
    opacity: 1;
}
</style>
