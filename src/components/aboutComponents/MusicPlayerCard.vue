<template>
    <div class="music_player_container commom_card_style">
        <div class="music_player_header">
            <MediaHeader />
            <SoundWaveIndicator />
        </div>
        <PlayerControls />
    </div>
</template>

<script setup>
import MediaHeader from "@/components/aboutComponents/MusicPlayerCard/MediaHeader.vue";
import SoundWaveIndicator from "@/components/aboutComponents/MusicPlayerCard/SoundWaveIndicator.vue";
import PlayerControls from "@/components/aboutComponents/MusicPlayerCard/PlayerControls.vue";
</script>

<style lang="scss">
.music_player_container {
    width: 326px;
    height: 326px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.music_player_header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
</style>
