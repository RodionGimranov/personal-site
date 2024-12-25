<template>
    <span ref="logo_effect" class="logo_tilt_effect" data-tilt-glare data-tilt-max-glare="0.3">
        <img class="logo_image" :src="logo_tilt_effect" alt="Logo image" />
    </span>
</template>

<script setup>
import { ref, onMounted } from "vue";

import VanillaTilt from "vanilla-tilt";

import logo_tilt_effect from "../../assets/images/svg/logo-tilt.svg";

const logo_effect = ref(null);

onMounted(() => {
    VanillaTilt.init(logo_effect.value, { max: 15, speed: 300 });
});
</script>

<style lang="scss">
.logo_tilt_effect {
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 30px;
    background: $secondary_bg;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 150px;
    font-weight: 700;

    .logo_image {
        width: 100%;
        height: 100%;
    }
}
</style>
