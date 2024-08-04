<template>
    <div class="image_block_container">
        <img class="image" :src="currentItem.gallery_image" alt="Gallery image" />
        <div class="slider_wrapper">
            <SliderIndicators :numberOfDots="5" :currentIndex="currentIndex" />
        </div>
    </div>
</template>

<script setup>
import { useSwitch } from "../../composablse/useSwitch.js";
import { galleryDataList } from "../../data/galleryDataList.js";

import SliderIndicators from "../SliderIndicators.vue";

const { currentIndex, currentItem } = useSwitch(galleryDataList);
</script>

<style lang="scss">
.image_block_container {
    position: relative;
    width: 326px;
    min-height: 326px;

    padding: 15px;
    overflow: hidden;
    border-radius: 30px;
    background: $block_bg_color;

    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}

.slider_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;

    z-index: 100;
    margin-bottom: 60px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
}
</style>
