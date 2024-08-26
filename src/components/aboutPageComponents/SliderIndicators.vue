<template>
    <div class="slider_indicators">
        <span
            class="slider_dot"
            v-for="index in 5"
            :key="index"
            :class="{ active: index - 1 === currentIndex % 5 }"
        ></span>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    numberOfDots: {
        type: Number,
        required: true,
    },
    currentIndex: {
        type: Number,
        required: true,
    },
});
</script>

<style lang="scss">
.slider_indicators {
    padding: 5px 10px;
    border-radius: 100px;
    backdrop-filter: blur(20px);
    background: $slider_indicator_bg_color;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
}

.slider_dot {
    width: 10px;
    height: 10px;

    transition: 0.5s;
    border-radius: 100px;
    background: $secondary_gray_color;

    &.active {
        background: $primary_white_color;
    }
}
</style>
