<template>
    <span ref="logo_effect" class="logo_tilt_effect" data-tilt-glare data-tilt-max-glare="0.3"
        >RG
    </span>
</template>

<script setup>
import { ref, onMounted } from "vue";

import VanillaTilt from "vanilla-tilt";

const logo_effect = ref(null);

onMounted(() => {
    VanillaTilt.init(logo_effect.value, { max: 15, speed: 300 });
});
</script>

<style lang="scss">
.logo_tilt_effect {
    width: 250px;
    height: 250px;

    padding: 20px;
    border-radius: 30px;
    background: $block_bg_color;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 150px;
    font-weight: 700;
}
</style>
