<template>
    <div class="gallery_page_wrapper">
        <div class="masonry_container">
            <ImageCard :images="shuffledPhotos" />
        </div>
        <div class="gallery_page_message">
            <p>{{ $t("message.gallery_page_message") }}</p>
        </div>
    </div>
</template>

<script setup>
import ImageCard from "@/components/ui/cards/ImageCard.vue";

import { useShuffledPhotos } from "@/composables/useShuffledPhotos";

import photos from "@/data/photos.json";

const { shuffledPhotos } = useShuffledPhotos(photos.photos);
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

.gallery_page_message {
    width: 100%;
    padding: 32px 16px 8px 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 14px;
        font-weight: 400;
        color: $secondary_gray;
    }
}
</style>
