<template>
    <div
        v-if="musicPlayerStore.currentSong"
        class="w-62.5 h-62.5 flex flex-col items-start justify-between common_bento_card_style commom_card_style bg-no-repeat bg-cover bg-center"
        :style="{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${musicPlayerStore.currentSong.album_cover})`,
        }"
    >
        <div class="w-full flex justify-between items-start gap-1">
            <div
                class="flex flex-col justify-start items-start _glass_effect rounded-[100px] overflow-hidden max-w-37.5 min-w-37.5 px-3! py-1!"
            >
                <div class="song_name_container w-full flex items-center gap-1">
                    <p class="song_name shrink">{{ musicPlayerStore.currentSong.song_name }}</p>
                    <SvgIcon
                        v-if="musicPlayerStore.currentSong.explicit_content"
                        name="explicit-icon"
                        :width="12"
                        :height="12"
                        style="opacity: 0.7"
                    />
                </div>
                <p class="artist_name w-full opacity-70">
                    {{ musicPlayerStore.currentSong.artist_name }}
                </p>
            </div>
            <SoundWaveIndicator :audioElement="musicPlayerStore.audio" />
        </div>
        <PlayerControls />
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

import { useMusicPlayerStore } from "@/stores/useMusicPlayerStore";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import SoundWaveIndicator from "@/components/aboutComponents/MusicPlayerCard/SoundWaveIndicator.vue";
import PlayerControls from "@/components/aboutComponents/MusicPlayerCard/PlayerControls.vue";

const musicPlayerStore = useMusicPlayerStore();

onMounted(() => {
    musicPlayerStore.init();
});

onBeforeUnmount(() => {
    musicPlayerStore.destroy();
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
