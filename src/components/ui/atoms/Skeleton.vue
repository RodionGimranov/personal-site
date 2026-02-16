<template>
    <div
        class="skeleton_loader relative overflow-hidden inline-block bg-fourth-gray"
        :style="{ width, height, borderRadius: radius }"
    />
</template>

<script setup lang="ts">
type SizeValue = string | number;

withDefaults(
    defineProps<{
        width?: SizeValue;
        height?: SizeValue;
        radius?: SizeValue;
    }>(),
    {
        width: 50,
        height: 50,
        radius: 0,
    },
);
</script>

<style lang="scss">
.skeleton_loader::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, var(--white-50) 50%, transparent 100%);
    animation: flash 1.8s infinite;
}

@keyframes flash {
    100% {
        left: 150%;
    }
}
</style>
