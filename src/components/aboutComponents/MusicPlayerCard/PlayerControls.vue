<template>
    <div class="w-full flex justify-center items-center gap-3.5">
        <button
            v-for="(button, index) in buttons"
            :key="index"
            class="_glass_effect flex justify-center items-center w-11.5 h-11.5 rounded-[100px] transform transition-transform duration-200 hover:scale-105"
            v-show="button.show === undefined || button.show"
            @click="button.action"
        >
            <SvgIcon :name="button.icon" :width="36" :height="36" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useMusicPlayerStore } from "@/stores/useMusicPlayerStore";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

const musicPlayerStore = useMusicPlayerStore();

const buttons = computed(() => [
    {
        icon: "previous-icon",
        action: musicPlayerStore.previous,
    },
    {
        icon: "pause-icon",
        action: musicPlayerStore.pause,
        show: musicPlayerStore.isPlaying,
    },
    {
        icon: "play-icon",
        action: musicPlayerStore.play,
        show: !musicPlayerStore.isPlaying,
    },
    {
        icon: "next-icon",
        action: musicPlayerStore.next,
    },
]);
</script>

<style lang="scss"></style>
