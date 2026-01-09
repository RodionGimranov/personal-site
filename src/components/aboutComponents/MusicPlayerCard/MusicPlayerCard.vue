<template>
    <div
        v-if="player.currentSong"
        class="w-62.5 h-62.5 flex flex-col items-start justify-between common_bento_card_style commom_card_style bg-no-repeat bg-cover bg-center"
        :style="{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${player.currentSong.album_cover})`,
        }"
    >
        <div class="w-full flex justify-between items-start">
            <div
                class="flex flex-col justify-start items-start _glass_effect rounded-[100px] overflow-hidden max-w-37.5 min-w-37.5 px-3! py-1!"
            >
                <div class="song_name_container w-full flex items-center gap-1">
                    <p class="song_name shrink">{{ player.currentSong.song_name }}</p>
                    <SvgIcon
                        v-if="player.currentSong.explicit_content"
                        name="explicit-icon"
                        :width="12"
                        :height="12"
                        style="opacity: 0.7"
                    />
                </div>
                <p class="artist_name w-full opacity-70">{{ player.currentSong.artist_name }}</p>
            </div>
            <SoundWaveIndicator :audioElement="player.audio" />
        </div>
        <PlayerControls />
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

import { useMusicPlayerStore } from "@/stores/useMusicPlayerStore.js";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import SoundWaveIndicator from "@/components/aboutComponents/MusicPlayerCard/SoundWaveIndicator.vue";
import PlayerControls from "@/components/aboutComponents/MusicPlayerCard/PlayerControls.vue";

const player = useMusicPlayerStore();

onMounted(() => {
    player.init();
});

onBeforeUnmount(() => {
    player.destroy();
});
</script>

<style lang="scss">
.song_name_container {
    &svg {
        flex-shrink: 0;
    }
}

.song_name,
.artist_name {
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    color: var(--primary-white);
    line-height: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
