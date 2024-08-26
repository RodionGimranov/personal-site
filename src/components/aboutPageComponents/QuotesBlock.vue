<template>
    <div class="quotes_block_container">
        <p class="block_title">IT quotes</p>
        <div class="quote_container">
            <p class="quote_text">{{ currentItem.quote }}</p>
            <p class="author_of_the_quote">- {{ currentItem.author }}</p>
        </div>
        <div class="controls_container">
            <SliderIndicators :numberOfDots="5" :currentIndex="currentIndex" />
        </div>
    </div>
</template>

<script setup>
import { useSwitch } from "../../composablse/useSwitch.js";
import { quotesDataList } from "../../data/quotesDataList.js";

import SliderIndicators from "../aboutPageComponents/SliderIndicators.vue";

const { currentIndex, currentItem } = useSwitch(quotesDataList);
</script>

<style lang="scss">
.quotes_block_container {
    width: 100%;
    height: 247px;

    padding: 20px;
    border-radius: 30px;
    background: $block_bg_color;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.block_title {
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 500;
    color: $primary_white_color;
}

.quote_container {
    width: 100%;
    min-height: 108.6px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.quote_text {
    font-size: 20px;
    font-weight: 400;
    color: $primary_white_color;
}

.author_of_the_quote {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    font-size: 18px;
    font-weight: 500;
    color: $text_gray_color;
}

.controls_container {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
</style>
