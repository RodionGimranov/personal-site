<template>
    <main class="about_page_container">
        <div class="blocks_row block1">
            <AboutGallery />
            <AboutTextMessage />
            <AboutMusicPlayer />
            <AboutMetadata />
            <AboutLogo3D />
        </div>
        <div class="blocks_row block2">
            <AboutTollStack />
            <AboutQuotes />
        </div>
    </main>
</template>

<script setup>
import AboutGallery from "../components/aboutPageComponents/AboutGallery.vue";
import AboutTextMessage from "../components/aboutPageComponents/AboutTextMessage.vue";
import AboutMusicPlayer from "../components/aboutPageComponents/AboutMusicPlayer.vue";
import AboutMetadata from "../components/aboutPageComponents/AboutMetadata.vue";
import AboutLogo3D from "../components/aboutPageComponents/AboutLogo3D.vue";
import AboutTollStack from "../components/aboutPageComponents/AboutTollStack.vue";
import AboutQuotes from "../components/aboutPageComponents/AboutQuotes.vue";
</script>

<style lang="scss">
.about_page_container {
    max-width: 1200px;
    margin-top: 20vh;
    margin-bottom: 150px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}

.blocks_row {
    width: 1018px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}

.block1 {
    flex-wrap: wrap;
}

.block1 > :nth-child(1) {
    order: 1;
}

.block1 > :nth-child(2) {
    order: 2;
}

.block1 > :nth-child(3) {
    order: 3;
}

.block1 > :nth-child(4) {
    order: 4;
}

.block1 > :nth-child(5) {
    order: 5;
}
</style>
