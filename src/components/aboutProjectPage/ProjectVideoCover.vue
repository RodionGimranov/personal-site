<template>
    <div
        class="w-140 h-78.75 overflow-hidden mb-8! rounded-[30px] bg-fifth-white border border-black-10"
    >
        <video
            v-if="videoSrc"
            class="w-full h-full object-cover"
            preload="metadata"
            autoplay
            loop
            muted
            playsinline
        >
            <source :src="videoSrc" type="video/mp4" />
            {{ $t("message.project_video_text") }}
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
