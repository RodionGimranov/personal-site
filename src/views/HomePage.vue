<template>
    <div class="home_page_wrapper common_page_wrapper">
        <BioText />
        <MyApproach />
        <TechStack />
        <SelectedProjects />
    </div>
</template>

<script setup>
import BioText from "@/components/homeComponents/BioText.vue";
import MyApproach from "@/components/homeComponents/MyApproach.vue";
import TechStack from "@/components/homeComponents/TechStack.vue";
import SelectedProjects from "@/components/homeComponents/SelectedProjects.vue";
</script>

<style lang="scss">
.home_page_wrapper {
    padding: 6px 64px 0 64px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 150px;
}
</style>
