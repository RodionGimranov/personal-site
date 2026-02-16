<template>
    <div class="flex w-full items-center justify-center gap-3.5">
        <button
            v-for="(button, index) in buttons"
            :key="index"
            class="_glass_effect flex h-11.5 w-11.5 transform items-center justify-center rounded-[100px] transition-transform duration-200 hover:scale-105"
            v-show="button.show === undefined || button.show"
            type="button"
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

type PlayerIconName = "previous-icon" | "pause-icon" | "play-icon" | "next-icon";

type PlayerButton = {
    icon: PlayerIconName;
    action: () => void;
    show?: boolean;
};

const musicPlayerStore = useMusicPlayerStore();

const buttons = computed<PlayerButton[]>(() => [
    {
        icon: "previous-icon",
        action: () => musicPlayerStore.previous(),
    },
    {
        icon: "pause-icon",
        action: () => musicPlayerStore.pause(),
        show: musicPlayerStore.isPlaying,
    },
    {
        icon: "play-icon",
        action: () => musicPlayerStore.play(),
        show: !musicPlayerStore.isPlaying,
    },
    {
        icon: "next-icon",
        action: () => musicPlayerStore.next(),
    },
]);
</script>

<style lang="scss"></style>
