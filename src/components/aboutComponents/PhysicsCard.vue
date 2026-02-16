<template>
    <div
        id="phycalsIcons"
        class="physics_card_container common_bento_card_style commom_card_style h-130 w-62.5 cursor-grab p-0!"
        :class="{ _grabbing: isGrabbing }"
        @mousedown="handleGrabbing"
        @mouseup="handleGrab"
    ></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { phycalsIcons } from "@/libs/matter-js/phycalsIcons";
import type { PhycalsIconsInstance } from "@/libs/matter-js/phycalsIcons";

const physicsInstance = ref<PhycalsIconsInstance | null>(null);
const isGrabbing = ref<boolean>(false);

let initTimerId: number | null = null;

const handleGrab = (): void => {
    isGrabbing.value = false;
};

const handleGrabbing = (): void => {
    isGrabbing.value = true;
};

onMounted((): void => {
    initTimerId = window.setTimeout(() => {
        physicsInstance.value = phycalsIcons() ?? null;
    }, 100);
});

onUnmounted((): void => {
    if (initTimerId !== null) {
        clearTimeout(initTimerId);
        initTimerId = null;
    }

    physicsInstance.value?.destroy();
    physicsInstance.value = null;
});
</script>

<style lang="scss">
.physics_card_container {
    &._grabbing {
        cursor: grabbing;
    }

    canvas {
        border-radius: inherit;
    }
}
</style>
