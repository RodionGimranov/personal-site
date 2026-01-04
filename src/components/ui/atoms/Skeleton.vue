<template>
    <div class="skeleton_loader" :style="{ width, height, borderRadius: radius }"></div>
</template>

<script setup>
const props = defineProps({
    width: { type: [String, Number], default: 50 },
    height: { type: [String, Number], default: 50 },
    radius: { type: [String, Number], default: 0 },
});
</script>

<style lang="scss">
.skeleton_loader {
    display: inline-block;
    background: $fourth_gray;
    position: relative;
    overflow: hidden;
}

.skeleton_loader::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, $white_50 50%, transparent 100%);
    animation: flash 1.8s infinite;
}

@keyframes flash {
    100% {
        left: 150%;
    }
}
</style>
