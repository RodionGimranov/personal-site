<template>
    <div
        v-if="player.currentSong"
        class="music_cover_container common_bento_card_style commom_card_style"
        :style="{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${player.currentSong.album_cover})`,
        }"
    >
        <div class="music_player_header">
            <div class="song_name_and_artist _glass_effect">
                <div class="song_name_container">
                    <p class="song_name">{{ player.currentSong.song_name }}</p>
                    <SvgIcon
                        v-if="player.currentSong.explicit_content"
                        name="explicit-icon"
                        :width="12"
                        :height="12"
                        style="opacity: 0.7"
                    />
                </div>
                <p class="artist_name">{{ player.currentSong.artist_name }}</p>
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
.music_cover_container {
    width: 250px;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.music_player_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.song_name_and_artist {
    max-width: 150px;
    min-width: 150px;
    overflow: hidden;
    padding: 4px 12px;
    border-radius: 100px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.song_name_container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;

    &svg {
        flex-shrink: 0;
    }
}

.song_name,
.artist_name {
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    color: $primary_white;
    line-height: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.song_name {
    flex-shrink: 1;
}

.artist_name {
    width: 100%;
    opacity: 0.7;
}
</style>
