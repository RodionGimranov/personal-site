<template>
    <div class="physics_card_container common_bento_card_style" id="phycalsIcons"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { phycalsIcons } from "@/libs/matter-js/phycalsIcons.js";

const physicsInstance = ref(null);

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
    padding: 0px !important;

    canvas {
        border-radius: inherit;
    }
}
</style>
