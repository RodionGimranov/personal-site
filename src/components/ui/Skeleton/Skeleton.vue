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
    background: linear-gradient(90deg, $fourth_gray 0, $primary_white 40px, $fourth_gray 80px);
    background-size: 200% 100%;
    animation: shimmer 2.3s infinite;
}

@keyframes shimmer {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
</style>
