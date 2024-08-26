<template>
    <main class="about_page_container">
        <div class="blocks_row block1">
            <GalleryBlock />
            <TextMessageBlock />
            <MusicPlayerBlock />
            <MetadataBlock />
            <Logo3DBlock />
        </div>
        <div class="blocks_row block2">
            <TollStackBlock />
            <QuotesBlock />
        </div>
    </main>
</template>

<script setup>
import GalleryBlock from "../components/aboutPageComponents/GalleryBlock.vue";
import TextMessageBlock from "../components/aboutPageComponents/TextMessageBlock.vue";
import MusicPlayerBlock from "../components/aboutPageComponents/MusicPlayerBlock.vue";
import MetadataBlock from "../components/aboutPageComponents/MetadataBlock.vue";
import Logo3DBlock from "../components/aboutPageComponents/Logo3DBlock.vue";
import TollStackBlock from "../components/aboutPageComponents/TollStackBlock.vue";
import QuotesBlock from "../components/aboutPageComponents/QuotesBlock.vue";
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
