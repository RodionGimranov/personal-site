<template>
    <div>
        <div
            v-for="photo in images"
            :key="photo.id"
            class="masonry_item cursor-pointer select-none transition-transform duration-200 rounded-2xl mb-4! break-inside-avoid perspective-[1000px] hover:scale-[0.98]"
            :class="{ flipped: flippedId === photo.id }"
            @click="toggleFlip(photo.id)"
        >
            <div
                class="flip_card_inner relative w-full h-full transition-transform duration-400 transform-3d"
            >
                <div class="flip_card_front">
                    <img
                        class="w-full block"
                        :src="photo.url"
                        :alt="photo.name[currentLocale]"
                        loading="lazy"
                    />
                </div>
                <div
                    class="flip_card_back absolute top-0 left-0 p-2.5 transform-[rotateY(180deg)] shadow-[2px_3px_10px_var(--black-25)] flex items-center justify-center text-center"
                >
                    <div class="photopaper absolute inset-0 w-full h-full z-0"></div>

                    <div
                        class="relative w-full z-10 rotate-[-25deg] flex flex-col items-start justify-start gap-1"
                    >
                        <p class="back_image_title">{{ photo.name[currentLocale] }}.JPG</p>
                        <p class="back_image_title">
                            {{ photo.date }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import type { PhotoWithHeight, Locale } from "@/types";

defineProps<{
    images: PhotoWithHeight[];
}>();

const { locale } = useI18n<{ message: unknown }, Locale>();

const flippedId = ref<number | null>(null);

function toggleFlip(id: number): void {
    flippedId.value = flippedId.value === id ? null : id;
}

const currentLocale = computed<Locale>(() => locale.value);
</script>

<style lang="scss">
.masonry_item.flipped .flip_card_inner {
    transform: rotateY(180deg);
}

.flip_card_front,
.flip_card_back {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    backface-visibility: hidden;
}

.photopaper {
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
    background-image: url("/personal-site/images/photopaper.webp");
}

.back_image_title {
    font-size: 14px;
    font-weight: 500;
    color: var(--fifth-dark);
    font-family: "Roboto Mono", monospace;
    font-style: normal;
}
</style>
