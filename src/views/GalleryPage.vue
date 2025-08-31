<template>
    <div class="gallery_page_wrapper">
        <div class="masonry_container">
            <ImageCard :images="photos.photos" />
        </div>
    </div>
</template>

<script setup>
import ImageCard from "@/components/ui/cards/ImageCard.vue";

import photos from "@/data/photos.json";
</script>

<style lang="scss">
.gallery_page_wrapper {
    width: 100%;
    padding: 16px;
}

.masonry_container {
    column-count: 4;
    column-gap: 16px;
}
</style>
