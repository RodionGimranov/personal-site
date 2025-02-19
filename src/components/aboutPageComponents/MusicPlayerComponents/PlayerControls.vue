<template>
    <div class="controls_btn_container">
        <button
            v-for="(button, index) in buttons"
            :key="index"
            class="control_btn"
            :class="button.class"
            @click="button.click"
            v-show="button.show === undefined || button.show"
        >
            <img class="button_control_icon" :src="button.icon" alt="Button Icon" />
        </button>
    </div>
    <audio ref="audioPlayer" :src="currentSong.song_url" @ended="handleEnded"></audio>
</template>

<script setup>
import { ref, inject, computed } from "vue";

const isPlaying = ref(false);
const isVolumeOn = ref(true);

const audioPlayer = inject("audioPlayer");
const currentSong = inject("currentSong");
const currentSongIndex = inject("currentSongIndex");
const playlistDataList = inject("playlistDataList");

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

const buttons = computed(() => [
    {
        class: "playlist_song",
        icon: new URL(
            "../../../assets/images/svg/musicPlayer-icons/Playlist-icon.svg",
            import.meta.url
        ).href,
    },
    {
        class: "previous_song",
        icon: new URL(
            "../../../assets/images/svg/musicPlayer-icons/Previous-song-icon.svg",
            import.meta.url
        ).href,
        click: playPreviousSong,
    },
    {
        class: "play_song",
        icon: new URL(
            "../../../assets/images/svg/musicPlayer-icons/Play-song-icon.svg",
            import.meta.url
        ).href,
        click: playSong,
        show: !isPlaying.value,
    },
    {
        class: "stop_song",
        icon: new URL(
            "../../../assets/images/svg/musicPlayer-icons/Stop-song-icon.svg",
            import.meta.url
        ).href,
        click: stopSong,
        show: isPlaying.value,
    },
    {
        class: "next_song",
        icon: new URL(
            "../../../assets/images/svg/musicPlayer-icons/Next-song-icon.svg",
            import.meta.url
        ).href,
        click: playNextSong,
    },
    {
        class: "song_volume_on",
        icon: new URL(
            "../../../assets/images/svg/musicPlayer-icons/Volume-on-icon.svg",
            import.meta.url
        ).href,
        click: muteVolume,
        show: isVolumeOn.value,
    },
    {
        class: "song_volume_off",
        icon: new URL(
            "../../../assets/images/svg/musicPlayer-icons/Volume-off-icon.svg",
            import.meta.url
        ).href,
        click: unmuteVolume,
        show: !isVolumeOn.value,
    },
]);
</script>

<style lang="scss">
.controls_btn_container {
    position: absolute;
    bottom: 12px;
    width: calc(100% - 24px);
    padding: 6px;
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

    &:hover {
        .button_control_icon {
            transform: scale(1.3);
        }
    }
}

.button_control_icon {
    transition: 0.2s;
    transform: scale(1.1);
}
</style>
