<template>
    <div
        class="physics_card_container common_bento_card_style commom_card_style"
        id="phycalsIcons"
        @mouseup="handleGrab"
        @mousedown="handleGrabbing"
        :class="{ _grabbing: isGrabbing }"
    ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { phycalsIcons } from "@/libs/matter-js/phycalsIcons.js";

const physicsInstance = ref(null);
const isGrabbing = ref(false);

const handleGrab = () => {
    isGrabbing.value = false;
};

const handleGrabbing = () => {
    isGrabbing.value = true;
};

onMounted(() => {
    setTimeout(() => {
        physicsInstance.value = phycalsIcons();
    }, 100);
});

onUnmounted(() => {
    if (physicsInstance.value && physicsInstance.value.destroy) {
        physicsInstance.value.destroy();
    }
});
</script>

<style lang="scss">
.physics_card_container {
    width: 250px;
    height: 520px;
    cursor: grab;
    padding: 0 !important;

    &._grabbing {
        cursor: grabbing;
    }

    canvas {
        border-radius: inherit;
    }
}
</style>
