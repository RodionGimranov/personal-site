<template>
    <div class="image_block_container">
        <img class="gallery_image_item" :src="currentItem.gallery_image" alt="Gallery image" />
        <div class="slider_wrapper">
            <SliderIndicators :numberOfDots="5" :currentIndex="currentIndex" />
        </div>
    </div>
</template>

<script setup>
import { useSwitch } from "../../composablse/useSwitch.js";

import galleryDataList from "../../data/galleryDataList.json";

import SliderIndicators from "../aboutPageComponents/SliderIndicators.vue";

const { currentIndex, currentItem } = useSwitch(galleryDataList.galleryDataList);
</script>

<style lang="scss">
.image_block_container {
    position: relative;
    width: 326px;
    height: 326px;
    overflow: hidden;
    border-radius: 40px;
    background: $secondary_bg;

    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery_image_item {
    width: 100%;
    height: 100%;
}

.slider_wrapper {
    position: absolute;
    bottom: 12px;
    width: 100%;
    z-index: 100;

    display: flex;
    justify-content: center;
}
</style>
