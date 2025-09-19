<template>
    <div class="gallery_page_wrapper">
        <div class="masonry_container">
            <ImageCard v-if="shuffledPhotos.length" :images="shuffledPhotos" />
            <template v-else>
                <Skeleton
                    v-for="n in 8"
                    :key="n"
                    :style="{
                        height: `${randomHeights[n - 1]}px`,
                        marginBottom: '16px',
                    }"
                    width="100%"
                    radius="16px"
                />
            </template>
        </div>
        <div class="gallery_page_message">
            <p>{{ $t("message.gallery_page_message") }}</p>
        </div>
    </div>
</template>

<script setup>
import ImageCard from "@/components/ui/cards/ImageCard.vue";
import Skeleton from "@/components/ui/Skeleton/Skeleton.vue";

import { useShuffledPhotos } from "@/composables/useShuffledPhotos.js";

import photos from "@/data/photos.json";

const { shuffledPhotos } = useShuffledPhotos(photos.photos);

const randomHeights = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * (470 - 355 + 1)) + 355,
);
</script>

<style lang="scss">
.gallery_page_wrapper {
    width: 100%;
    padding: 6px 16px;
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
