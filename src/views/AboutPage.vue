<template>
    <main class="about_page_container">
        <div class="blocks_row block1">
            <GalleryBlock />
            <LocationBlock />
            <MusicPlayerBlock />
            <MetadataBlock />
            <!-- <TextMessageBlock /> -->
        </div>
        <div class="blocks_row block2">
            <TollStackBlock />
            <QuotesBlock />
        </div>
    </main>
</template>

<script setup>
import GalleryBlock from "../components/aboutPageComponents/GalleryBlock.vue";
import LocationBlock from "../components/aboutPageComponents/LocationBlock.vue";
// import TextMessageBlock from "../components/aboutPageComponents/TextMessageBlock.vue";
import MusicPlayerBlock from "../components/aboutPageComponents/MusicPlayerComponents/MusicPlayerBlock.vue";
import MetadataBlock from "../components/aboutPageComponents/MetadataComponents/MetadataBlock.vue";
import TollStackBlock from "../components/aboutPageComponents/TollStackBlock.vue";
import QuotesBlock from "../components/aboutPageComponents/QuotesBlock.vue";
</script>

<style lang="scss">
.about_page_container {
    max-width: 1200px;
    margin-top: 200px;
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
</style>
