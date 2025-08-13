<template>
    <div class="home_page_wrapper common_page_wrapper"><HeroText /></div>
</template>

<script setup>
import HeroText from "@/components/homeComponents/HeroText.vue";
</script>

<style lang="scss">
.home_page_wrapper {
    padding: 36px 64px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
</style>
