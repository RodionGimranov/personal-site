<template>
    <div class="w-full">
        <div class="columns-4 gap-4">
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

<script setup lang="ts">
import { useShuffledPhotos } from "@/composables/useShuffledPhotos";
import photos from "@/data/photos.json";

import ImageCard from "@/components/ui/molecules/ImageCard.vue";
import Skeleton from "@/components/ui/atoms/Skeleton.vue";

const { shuffledPhotos } = useShuffledPhotos(photos.photos);

const randomHeights: number[] = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * (470 - 355 + 1)) + 355,
);
</script>

<style lang="scss"></style>
