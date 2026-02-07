<template>
    <div class="blur-mask-container w-full h-full flex-none">
        <div class="layer layer-1 z-1 backdrop-blur-[0.125px]"></div>
        <div class="layer layer-2 z-2 backdrop-blur-[0.25px]"></div>
        <div class="layer layer-3 z-3 backdrop-blur-[0.5px]"></div>
        <div class="layer layer-4 z-4 backdrop-blur-[1px]"></div>
        <div class="layer layer-5 z-5 backdrop-blur-[2px]"></div>
        <div class="layer layer-6 z-6 backdrop-blur-xs"></div>
        <div class="layer layer-7 z-7 backdrop-blur-sm"></div>
        <div class="layer layer-8 z-8 backdrop-blur-lg"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.layer {
    position: absolute;
    inset: 0;
    border-radius: 0;
    pointer-events: none;
}

.layer-1 {
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 0%,
        rgb(0, 0, 0) 12.5%,
        rgb(0, 0, 0) 25%,
        rgba(0, 0, 0, 0) 37.5%
    );
}

.layer-2 {
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 12.5%,
        rgb(0, 0, 0) 25%,
        rgb(0, 0, 0) 37.5%,
        rgba(0, 0, 0, 0) 50%
    );
}

.layer-3 {
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 25%,
        rgb(0, 0, 0) 37.5%,
        rgb(0, 0, 0) 50%,
        rgba(0, 0, 0, 0) 62.5%
    );
}

.layer-4 {
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 37.5%,
        rgb(0, 0, 0) 50%,
        rgb(0, 0, 0) 62.5%,
        rgba(0, 0, 0, 0) 75%
    );
}

.layer-5 {
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 50%,
        rgb(0, 0, 0) 62.5%,
        rgb(0, 0, 0) 75%,
        rgba(0, 0, 0, 0) 87.5%
    );
}

.layer-6 {
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 62.5%,
        rgb(0, 0, 0) 75%,
        rgb(0, 0, 0) 87.5%,
        rgba(0, 0, 0, 0) 100%
    );
}

.layer-7 {
    mask-image: linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%);
}

.layer-8 {
    mask-image: linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%);
}
</style>
