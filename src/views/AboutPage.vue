<template>
    <div class="about_page_wrapper common_page_wrapper">
        <LocationCard />
    </div>
</template>

<script setup>
import LocationCard from "../components/aboutComponents/LocationCard.vue";
</script>

<style lang="scss">
.about_page_wrapper {
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}
</style>
