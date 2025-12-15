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
    </div>
</template>

<script setup>
import { useShuffledPhotos } from "@/composables/useShuffledPhotos.js";

import ImageCard from "@/components/ui/cards/ImageCard.vue";
import Skeleton from "@/components/ui/Skeleton/Skeleton.vue";

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
    padding: 6px 16px 0 16px;
}

.masonry_container {
    column-count: 4;
    column-gap: 16px;
}
</style>
