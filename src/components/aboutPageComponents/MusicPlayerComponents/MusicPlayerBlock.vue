<template>
    <div class="music_block_container">
        <div class="music_block_header">
            <img class="album_art_image" :src="currentSong.album_image" alt="Album Art" />
            <MusicVisualizer :audioElement="audioPlayer" />
        </div>
        <div class="song_title_container">
            <p class="song_title">{{ currentSong.song_name }}</p>
            <svg
                class="explicit_icon"
                width="12"
                height="12"
                v-show="currentSong.explicit_content === true"
            >
                <use xlink:href="/images/svg/sprite.svg#explicit-icon"></use>
            </svg>
        </div>
        <p class="artist_name">{{ currentSong.artist_name }}</p>
        <PlayerControls />
    </div>
</template>

<script setup>
import { ref, provide, watch } from "vue";

import { playlistDataList } from "../../../data/playlistDataList.json";

import MusicVisualizer from "./MusicVisualizer.vue";
import PlayerControls from "./PlayerControls.vue";

const currentSongIndex = ref(0);
const currentSong = ref(playlistDataList[currentSongIndex.value]);
const audioPlayer = ref(null);

provide("currentSongIndex", currentSongIndex);
provide("playlistDataList", playlistDataList);
provide("audioPlayer", audioPlayer);
provide("currentSong", currentSong);

watch(currentSongIndex, () => {
    currentSong.value = playlistDataList[currentSongIndex.value];
});
</script>

<style lang="scss">
.music_block_container {
    position: relative;
    width: 326px;
    height: 326px;
    padding: 12px;
    border-radius: 40px;
    background: $secondary_bg;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.music_block_header {
    width: 100%;
    margin-bottom: 15px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.album_art_image {
    width: 150px;
    height: 150px;
    border-radius: 26px;
    background: $third_bg;
}

.song_title_container {
    margin-bottom: 7px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
}

.song_title {
    font-size: 18px;
    font-weight: 500;
    color: $primary_white;
}

.artist_name {
    margin-bottom: 32px;
    font-size: 18px;
    font-weight: 400;
    color: $secondary_red;
}
</style>
