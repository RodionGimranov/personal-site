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
            <svg class="button_control_icon" :width="button.width" :height="button.height">
                <use :xlink:href="button.icon"></use>
            </svg>
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
        icon: "/personal-site/images/svg/sprite.svg#Playlist-icon",
        width: 18,
        height: 18,
    },
    {
        class: "previous_song",
        icon: "/personal-site/images/svg/sprite.svg#Previous-song-icon",
        width: 16,
        height: 12,
        click: playPreviousSong,
    },
    {
        class: "play_song",
        icon: "/personal-site/images/svg/sprite.svg#Play-song-icon",
        width: 18,
        height: 18,
        click: playSong,
        show: !isPlaying.value,
    },
    {
        class: "stop_song",
        icon: "/personal-site/images/svg/sprite.svg#Stop-song-icon",
        width: 18,
        height: 20,
        click: stopSong,
        show: isPlaying.value,
    },
    {
        class: "next_song",
        icon: "/personal-site/images/svg/sprite.svg#Next-song-icon",
        width: 16,
        height: 12,
        click: playNextSong,
    },
    {
        class: "song_volume_on",
        icon: "/personal-site/images/svg/sprite.svg#Volume-on-icon",
        width: 18,
        height: 14,
        click: muteVolume,
        show: isVolumeOn.value,
    },
    {
        class: "song_volume_off",
        icon: "/personal-site/images/svg/sprite.svg#Volume-off-icon",
        width: 18,
        height: 14,
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
