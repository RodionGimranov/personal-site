<template>
    <div>
        <div
            v-for="photo in images"
            :key="photo.id"
            class="masonry_item"
            :class="{ flipped: flippedId === photo.id }"
            @click="toggleFlip(photo.id)"
        >
            <div class="flip_card_inner">
                <div class="flip_card_front">
                    <img
                        class="gallery_image_item"
                        :src="photo.url"
                        :alt="photo.name[currentLocale]"
                        loading="lazy"
                    />
                </div>
                <div class="flip_card_back">
                    <div class="photopaper"></div>
                    <div class="flip_card_back_content">
                        <p class="back_image_title">{{ photo.name[currentLocale] }}.JPG</p>
                        <p class="back_image_title">{{ photo.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

defineProps({
    images: {
        type: Array,
        required: true,
    },
});

const { locale } = useI18n();

const flippedId = ref(null);

function toggleFlip(id) {
    flippedId.value = flippedId.value === id ? null : id;
}

const currentLocale = computed(() => locale.value);
</script>

<style lang="scss">
.masonry_item {
    cursor: pointer;
    transition: 0.2s;
    user-select: none;
    border-radius: 16px;
    margin-bottom: 16px;
    break-inside: avoid;
    perspective: 1000px;

    &:hover {
        transform: scale(1.02);
    }
}

.flip_card_inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.4s;
    transform-style: preserve-3d;
}

.masonry_item.flipped .flip_card_inner {
    transform: rotateY(180deg);
}

.gallery_image_item {
    width: 100%;
    display: block;
}

.flip_card_front,
.flip_card_back {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    backface-visibility: hidden;
}

.flip_card_back {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    transform: rotateY(180deg);
    box-shadow: 2px 3px 10px $secondary_translucent_dark;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.photopaper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
    background-image: url("/personal-site-beta/images/photopaper.webp");
}

.flip_card_back_content {
    position: relative;
    width: 100%;
    z-index: 1;
    // or delete
    transform: rotate(-25deg);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
}

.back_image_title {
    font-size: 14px;
    font-weight: 500;
    color: $fifth_dark;
    font-family: "Roboto Mono", monospace;
    font-style: normal;
}
</style>
