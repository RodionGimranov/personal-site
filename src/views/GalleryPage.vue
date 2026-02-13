<template>
    <div class="w-full">
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
import { useShuffledPhotos } from "@/composables/useShuffledPhotos";

import ImageCard from "@/components/ui/molecules/ImageCard.vue";
import Skeleton from "@/components/ui/atoms/Skeleton.vue";

import photos from "@/data/photos.json";

const { shuffledPhotos } = useShuffledPhotos(photos.photos);

const randomHeights = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * (470 - 355 + 1)) + 355,
);
</script>

<style lang="scss">
.masonry_container {
    column-count: 4;
    column-gap: 16px;
}
</style>
