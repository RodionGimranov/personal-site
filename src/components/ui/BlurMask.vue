<template>
    <div class="blur-mask-container">
        <div class="layer layer-1"></div>
        <div class="layer layer-2"></div>
        <div class="layer layer-3"></div>
        <div class="layer layer-4"></div>
        <div class="layer layer-5"></div>
        <div class="layer layer-6"></div>
        <div class="layer layer-7"></div>
        <div class="layer layer-8"></div>
    </div>
</template>

<script setup></script>

<style lang="scss">
.blur-mask-container {
    width: 100%;
    height: 100%;
    flex: none;
}

.layer {
    position: absolute;
    inset: 0;
    border-radius: 0;
    pointer-events: none;
}

.layer-1 {
    z-index: 1;
    backdrop-filter: blur(0.125px);
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 0%,
        rgb(0, 0, 0) 12.5%,
        rgb(0, 0, 0) 25%,
        rgba(0, 0, 0, 0) 37.5%
    );
}

.layer-2 {
    z-index: 2;
    backdrop-filter: blur(0.25px);
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 12.5%,
        rgb(0, 0, 0) 25%,
        rgb(0, 0, 0) 37.5%,
        rgba(0, 0, 0, 0) 50%
    );
}

.layer-3 {
    z-index: 3;
    backdrop-filter: blur(0.5px);
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 25%,
        rgb(0, 0, 0) 37.5%,
        rgb(0, 0, 0) 50%,
        rgba(0, 0, 0, 0) 62.5%
    );
}

.layer-4 {
    z-index: 4;
    backdrop-filter: blur(1px);
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 37.5%,
        rgb(0, 0, 0) 50%,
        rgb(0, 0, 0) 62.5%,
        rgba(0, 0, 0, 0) 75%
    );
}

.layer-5 {
    z-index: 5;
    backdrop-filter: blur(2px);
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 50%,
        rgb(0, 0, 0) 62.5%,
        rgb(0, 0, 0) 75%,
        rgba(0, 0, 0, 0) 87.5%
    );
}

.layer-6 {
    z-index: 6;
    backdrop-filter: blur(4px);
    mask-image: linear-gradient(
        rgba(0, 0, 0, 0) 62.5%,
        rgb(0, 0, 0) 75%,
        rgb(0, 0, 0) 87.5%,
        rgba(0, 0, 0, 0) 100%
    );
}

.layer-7 {
    z-index: 7;
    backdrop-filter: blur(8px);
    mask-image: linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%);
}

.layer-8 {
    z-index: 8;
    backdrop-filter: blur(16px);
    mask-image: linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%);
}
</style>
