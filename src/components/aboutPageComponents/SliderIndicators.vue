<template>
    <div class="slider_indicators">
        <span
            class="slider_dot"
            v-for="dots in 5"
            :key="dots"
            :class="{ active: dots - 1 === currentIndex % 5 }"
        ></span>
    </div>
</template>

<script setup>
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
    padding: 9px;
    border-radius: 100px;
    backdrop-filter: blur(20px);
    background: $content_bg;

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
    background: $slider_dot_bg;

    &.active {
        background: $primary_white;
    }
}
</style>
