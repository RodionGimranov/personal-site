<template>
    <div class="controls_btn_container">
        <button class="control_btn playlist">
            <img
                class="button_control_icon"
                src="../../../assets/images/svg/musicPlayer-icons/Playlist-icon.svg"
                alt="Button Icon"
            />
        </button>
        <button class="control_btn previous" @click="playPreviousSong">
            <img
                class="button_control_icon"
                src="../../../assets/images/svg/musicPlayer-icons/Previous-song-icon.svg"
                alt="Button Icon"
            />
        </button>
        <button class="control_btn play" v-show="!isPlaying" @click="playSong">
            <img
                class="button_control_icon play_icon"
                src="../../../assets/images/svg/musicPlayer-icons/Play-song-icon.svg"
                alt="Button Icon"
            />
        </button>
        <button class="control_btn stop" v-show="isPlaying" @click="stopSong">
            <img
                class="button_control_icon"
                src="../../../assets/images/svg/musicPlayer-icons/Stop-song-icon.svg"
                alt="Button Icon"
            />
        </button>
        <button class="control_btn next" @click="playNextSong">
            <img
                class="button_control_icon"
                src="../../../assets/images/svg/musicPlayer-icons/Next-song-icon.svg"
                alt="Button Icon"
            />
        </button>
        <button class="control_btn volume_on" v-show="isVolumeOn" @click="muteVolume">
            <img
                class="button_control_icon"
                src="../../../assets/images/svg/musicPlayer-icons/Volume-on-icon.svg"
                alt="Button Icon"
            />
        </button>
        <button class="control_btn volume_off" v-show="!isVolumeOn" @click="unmuteVolume">
            <img
                class="button_control_icon"
                src="../../../assets/images/svg/musicPlayer-icons/Volume-off-icon.svg"
                alt="Button Icon"
            />
        </button>
    </div>
    <audio ref="audioPlayer" :src="currentSong.song_url" @ended="handleEnded"></audio>
</template>

<script setup>
import { ref, inject } from "vue";

const isPlaying = ref(false);
const isVolumeOn = ref(true);

const currentSongIndex = inject("currentSongIndex");
const playlistDataList = inject("playlistDataList");
const audioPlayer = inject("audioPlayer");
const currentSong = inject("currentSong");

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

const handleEnded = () => {
    playNextSong();
};

const changeSong = async () => {
    if (audioPlayer.value) {
        audioPlayer.value.pause();
        audioPlayer.value.currentTime = 0;

        currentSong.value = playlistDataList[currentSongIndex.value];
        audioPlayer.value.src = currentSong.value.song_url;

        try {
            await audioPlayer.value.load();
            if (isPlaying.value) {
                await audioPlayer.value.play();
            }
        } catch (error) {
            console.error("Error changing song:", error);
        }
    }
};
</script>

<style lang="scss">
.controls_btn_container {
    width: 100%;
    padding: 3px 0px;
    border-radius: 100px;
    border: 1px solid $primary_white;

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
        background: $button_active;

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
