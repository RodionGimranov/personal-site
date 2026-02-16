<template>
    <div
        v-if="currentSong"
        class="common_bento_card_style commom_card_style flex h-62.5 w-62.5 flex-col items-start justify-between bg-cover bg-center bg-no-repeat"
        :style="{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${currentSong.album_cover})`,
        }"
    >
        <div class="flex w-full items-start justify-between gap-1">
            <div
                class="_glass_effect flex max-w-37.5 min-w-37.5 flex-col items-start justify-start overflow-hidden rounded-[100px] px-3! py-1!"
            >
                <div class="song_name_container flex w-full items-center gap-1">
                    <p class="song_name shrink text-sm">{{ currentSong.song_name }}</p>
                    <SvgIcon
                        v-if="currentSong.explicit_content"
                        name="explicit-icon"
                        :width="12"
                        :height="12"
                        style="opacity: 0.7"
                    />
                </div>
                <p class="artist_name w-full text-sm opacity-70">
                    {{ currentSong.artist_name }}
                </p>
            </div>
            <SoundWaveIndicator :audioElement="musicPlayerStore.audio" />
        </div>
        <PlayerControls />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from "vue";

import type { Song } from "@/types/music";
import { useMusicPlayerStore } from "@/stores/useMusicPlayerStore";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
import SoundWaveIndicator from "@/components/aboutComponents/MusicPlayerCard/SoundWaveIndicator.vue";
import PlayerControls from "@/components/aboutComponents/MusicPlayerCard/PlayerControls.vue";

const musicPlayerStore = useMusicPlayerStore();

const currentSong = computed<Song | null>(() => musicPlayerStore.currentSong);

onMounted((): void => {
    musicPlayerStore.init();
});

onBeforeUnmount((): void => {
    musicPlayerStore.destroy();
});
</script>

<style lang="scss">
.song_name_container {
    & svg {
        flex-shrink: 0;
    }
}

.song_name,
.artist_name {
    overflow: hidden;
    font-weight: 400;
    color: var(--primary-white);
    line-height: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
