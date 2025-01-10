<template>
    <div class="quotes_block_container">
        <p class="block_title">IT quotes</p>
        <div class="quote_container">
            <p class="quote_text">{{ currentItem.quote }}</p>
            <p class="author_of_the_quote">- {{ currentItem.author }}</p>
        </div>
    </div>
</template>

<script setup>
import { useSwitch } from "../../composablse/useSwitch.js";
import { quotesDataList } from "../../data/quotesDataList.js";

const { currentItem } = useSwitch(quotesDataList);
</script>

<style lang="scss">
.quotes_block_container {
    width: 100%;
    height: 247px;
    padding: 20px;
    border-radius: 40px;
    background: $secondary_bg;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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
    color: $primary_white;
}

.author_of_the_quote {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    font-size: 18px;
    font-weight: 400;
    color: $third_gray;
}
</style>
