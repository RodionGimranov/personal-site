<template>
    <div class="player_controlls_container">
        <button
            v-for="(button, index) in buttons"
            :key="index"
            class="player_controll_btn _glass_effect"
            v-show="button.show === undefined || button.show"
            @click="button.action"
        >
            <SvgIcon :name="button.icon" :width="36" :height="36" />
        </button>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useMusicPlayerStore } from "@/stores/useMusicPlayerStore";

import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";

const player = useMusicPlayerStore();

const buttons = computed(() => [
    {
        icon: "previous-icon",
        action: player.previous,
    },
    {
        icon: "pause-icon",
        action: player.pause,
        show: player.isPlaying,
    },
    {
        icon: "play-icon",
        action: player.play,
        show: !player.isPlaying,
    },
    {
        icon: "next-icon",
        action: player.next,
    },
]);
</script>

<style lang="scss">
.player_controlls_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
}

.player_controll_btn {
    width: 46px;
    height: 46px;
    transition: 0.2s;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.05);
    }
}
</style>
