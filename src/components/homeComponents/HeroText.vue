<template>
    <div class="hero_text_container">
        <p
            ref="heroText"
            class="hero_text"
            v-html="$filters.formatText($t('message.hero_text'))"
        ></p>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { animateHeroText } from "@/libs/gsap/animateHeroText.js";

const heroText = ref(null);

onMounted(() => {
    animateHeroText(heroText.value);
});
</script>

<style lang="scss">
.hero_text_container {
    opacity: 1;
}

.hero_text {
    width: 100%;
    font-size: 36px;
    font-weight: 600;
    color: $primary_dark;
    line-height: 44px;
}
</style>
