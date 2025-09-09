<template>
    <div class="home_page_wrapper common_page_wrapper">
        <BioText />
        <MyApproach />
        <TechStack />
    </div>
</template>

<script setup>
import BioText from "@/components/homeComponents/BioText.vue";
import MyApproach from "@/components/homeComponents/MyApproach.vue";
import TechStack from "@/components/homeComponents/TechStack.vue";
</script>

<style lang="scss">
.home_page_wrapper {
    padding: 36px 64px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 200px;
}
</style>
