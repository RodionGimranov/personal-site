<template>
    <div>
        <div
            v-for="photo in images"
            :key="photo.id"
            class="masonry_item mb-4! cursor-pointer break-inside-avoid rounded-2xl transition-transform duration-200 select-none perspective-[1000px] hover:scale-[0.98]"
            :class="{ flipped: flippedId === photo.id }"
            @click="toggleFlip(photo.id)"
        >
            <div
                class="flip_card_inner relative h-full w-full transition-transform duration-400 transform-3d"
            >
                <div class="flip_card_front">
                    <img
                        class="block w-full"
                        :src="photo.url"
                        :alt="photo.name[currentLocale]"
                        loading="lazy"
                    />
                </div>
                <div
                    class="flip_card_back absolute top-0 left-0 flex transform-[rotateY(180deg)] items-center justify-center p-2.5 text-center shadow-[2px_3px_10px_var(--black-25)]"
                >
                    <div class="photopaper absolute inset-0 z-0 h-full w-full"></div>

                    <div
                        class="relative z-10 flex w-full rotate-[-25deg] flex-col items-start justify-start gap-1"
                    >
                        <p class="back_image_title text-sm">{{ photo.name[currentLocale] }}.JPG</p>
                        <p class="back_image_title text-sm">
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
    font-weight: 500;
    color: var(--fifth-dark);
    font-family: "Roboto Mono", monospace;
    font-style: normal;
}
</style>
