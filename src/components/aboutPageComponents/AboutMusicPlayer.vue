<template>
    <div class="music_block_container">
        <img class="album_art_image" :src="currentSong.album_image" alt="Album Art" />
        <p class="song_title">{{ currentSong.song_name }}</p>
        <p class="artist_name">{{ currentSong.artist_name }}</p>
        <audio ref="audioPlayer" :src="currentSong.song_url" @ended="playNextSong"></audio>
        <div class="controls_btn_container">
            <button class="control_btn playlist">
                <img
                    class="button_control_icon"
                    src="../../assets/images/svg/musicPlayer-icons/Playlist-icon.svg"
                    alt="Button Icon"
                />
            </button>
            <button class="control_btn previous" @click="playPreviousSong">
                <img
                    class="button_control_icon"
                    src="../../assets/images/svg/musicPlayer-icons/Previous-song-icon.svg"
                    alt="Button Icon"
                />
            </button>
            <button class="control_btn play" v-if="!isPlaying" @click="playSong">
                <img
                    class="button_control_icon play_icon"
                    src="../../assets/images/svg/musicPlayer-icons/Play-song-icon.svg"
                    alt="Button Icon"
                />
            </button>
            <button class="control_btn stop" v-if="isPlaying" @click="stopSong">
                <img
                    class="button_control_icon"
                    src="../../assets/images/svg/musicPlayer-icons/Stop-song-icon.svg"
                    alt="Button Icon"
                />
            </button>
            <button class="control_btn next" @click="playNextSong">
                <img
                    class="button_control_icon"
                    src="../../assets/images/svg/musicPlayer-icons/Next-song-icon.svg"
                    alt="Button Icon"
                />
            </button>
            <button class="control_btn volume_on" v-if="isVolumeOn" @click="muteVolume">
                <img
                    class="button_control_icon"
                    src="../../assets/images/svg/musicPlayer-icons/Volume-on-icon.svg"
                    alt="Button Icon"
                />
            </button>
            <button class="control_btn volume_off" v-if="!isVolumeOn" @click="unmuteVolume">
                <img
                    class="button_control_icon"
                    src="../../assets/images/svg/musicPlayer-icons/Volume-off-icon.svg"
                    alt="Button Icon"
                />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { playlistDataList } from "../../data/playlistDataList.js";

const isPlaying = ref(false);
const isVolumeOn = ref(true);
const currentSongIndex = ref(0);
const currentSong = ref(playlistDataList[currentSongIndex.value]);

const audioPlayer = ref(null);

const stopSong = () => {
    if (audioPlayer.value) {
        audioPlayer.value.pause();
        isPlaying.value = false;
    }
};

const playSong = () => {
    if (audioPlayer.value) {
        audioPlayer.value.play().catch((error) => {
            console.error("Error playing song:", error);
        });
        isPlaying.value = true;
    }
};

const muteVolume = () => {
    if (audioPlayer.value) {
        audioPlayer.value.muted = true;
        isVolumeOn.value = false;
    }
};

const unmuteVolume = () => {
    if (audioPlayer.value) {
        audioPlayer.value.muted = false;
        isVolumeOn.value = true;
    }
};

const playPreviousSong = () => {
    if (currentSongIndex.value > 0) {
        currentSongIndex.value--;
    } else {
        currentSongIndex.value = playlistDataList.length - 1;
    }
    changeSong();
};

const playNextSong = () => {
    if (currentSongIndex.value < playlistDataList.length - 1) {
        currentSongIndex.value++;
    } else {
        currentSongIndex.value = 0;
    }
    changeSong();
};

const changeSong = async () => {
    if (audioPlayer.value) {
        audioPlayer.value.pause();
        audioPlayer.value.currentTime = 0;
        currentSong.value = playlistDataList[currentSongIndex.value];

        await audioPlayer.value.load();

        if (isPlaying.value) {
            audioPlayer.value.play().catch((error) => {
                console.error("Error playing song:", error);
            });
        }
    }
};

watch(currentSong, async () => {
    if (audioPlayer.value) {
        audioPlayer.value.oncanplay = async () => {
            if (isPlaying.value) {
                audioPlayer.value.play().catch((error) => {
                    console.error("Error playing song:", error);
                });
            }
        };
    }
});
</script>

<style lang="scss">
.music_block_container {
    width: 326px;
    height: 326px;

    padding: 20px;
    overflow: hidden;
    border-radius: 30px;
    background: $block_bg_color;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.album_art_image {
    width: 150px;
    height: 150px;

    background: #333;
    margin-bottom: 15px;
    border-radius: 20px;
}

.song_title {
    margin-bottom: 7px;
    font-size: 18px;
    font-weight: 500;
    color: $primary_white_color;
}

.artist_name {
    margin-bottom: 32px;
    font-size: 18px;
    font-weight: 400;
    color: $song_name_color;
}

.controls_btn_container {
    width: 100%;
    padding: 3px 0px;
    border-radius: 100px;
    border: 1px solid #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.control_btn {
    width: 36px;
    height: 36px;

    transition: 0.2s;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
        background: $button_active_color;

        .button_control_icon {
            transform: scale(0.8);
        }
    }
}

.button_control_icon {
    transition: 0.2s;
    transform: scale(1.1);
}

.play_icon {
    margin-left: 2px;
}
</style>
