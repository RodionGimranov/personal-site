<template>
    <div class="music_player_container commom_card_style" v-if="currentSong">
        <div
            class="music_cover_container"
            :style="{
                backgroundImage: `url(${currentSong.album_cover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }"
        >
            <div class="music_player_header">
                <div class="song_name_and_artist">
                    <div class="song_name_container">
                        <p class="song_name">{{ currentSong.song_name }}</p>
                        <SvgIcon
                            v-if="currentSong.explicit_content"
                            name="explicit-icon"
                            width="12"
                            height="12"
                            :style="{ opacity: 0.7 }"
                        />
                    </div>
                    <p class="artist_name">{{ currentSong.artist_name }}</p>
                </div>
                <SoundWaveIndicator :audioElement="playerState.audio" />
            </div>
            <PlayerControls />
        </div>
    </div>
</template>

<script setup>
import { reactive, computed, provide, onMounted, onBeforeUnmount } from "vue";

import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";
import SoundWaveIndicator from "@/components/aboutComponents/MusicPlayerCard/SoundWaveIndicator.vue";
import PlayerControls from "@/components/aboutComponents/MusicPlayerCard/PlayerControls.vue";

import songsData from "@/data/songs.json";

const songs = songsData.songs || [];

const playerState = reactive({
    currentIndex: 0,
    currentSong: songs[0] || null,
    isPlaying: false,
    audio: null,
});

const currentSong = computed(() => playerState.currentSong);

onMounted(() => {
    if (!playerState.currentSong) return;

    playerState.audio = new Audio(playerState.currentSong.song_url);
    playerState.audio.addEventListener("ended", nextSong);
});

onBeforeUnmount(() => {
    if (playerState.audio) {
        playerState.audio.pause();
        playerState.audio.src = "";
        playerState.audio = null;
    }
});

const playSong = () => {
    if (!playerState.audio) return;
    playerState.audio.play();
    playerState.isPlaying = true;
};

const pauseSong = () => {
    if (!playerState.audio) return;
    playerState.audio.pause();
    playerState.isPlaying = false;
};

const nextSong = () => {
    if (songs.length === 0) return;
    playerState.currentIndex = (playerState.currentIndex + 1) % songs.length;
    updateCurrentSong();
};

const previousSong = () => {
    if (songs.length === 0) return;
    playerState.currentIndex = (playerState.currentIndex - 1 + songs.length) % songs.length;
    updateCurrentSong();
};

const updateCurrentSong = () => {
    playerState.currentSong = songs[playerState.currentIndex];
    if (!playerState.audio) return;
    playerState.audio.src = playerState.currentSong.song_url;
    if (playerState.isPlaying) {
        playerState.audio.play();
    }
};

provide("player", {
    state: playerState,
    playSong,
    pauseSong,
    nextSong,
    previousSong,
});
</script>

<style lang="scss">
.music_player_container {
    width: 250px;
    height: 250px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.music_cover_container {
    width: 100%;
    height: 100%;
    padding: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.music_player_header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
}

.song_name_and_artist {
    max-width: 150px;
    min-width: 150px;
    overflow: hidden;
    padding: 4px 12px;
    border-radius: 100px;
    backdrop-filter: blur(44px);
    background: $secondary_translucent_dark;

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
