<template>
    <div
        class="bg-fifth-white border-black-10 mb-8! h-78.75 w-140 overflow-hidden rounded-[30px] border"
    >
        <video
            v-if="videoSrc"
            class="h-full w-full object-cover"
            preload="metadata"
            autoplay
            loop
            muted
            playsinline
        >
            <source :src="videoSrc" type="video/mp4" />
            {{ $t("projectsLocale.project_video_text") }}
        </video>
        <Skeleton v-else width="100%" height="100%" />
    </div>
</template>

<script setup lang="ts">
import Skeleton from "@/components/ui/atoms/Skeleton.vue";

interface Props {
    videoSrc?: string;
}

withDefaults(defineProps<Props>(), {
    videoSrc: "",
});
</script>

<style lang="scss"></style>
