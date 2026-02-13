<template>
    <div class="flex flex-col justify-start items-start gap-[150px]">
        <BioText />
        <MyApproach />
        <TechStack />
        <SelectedProjects />
    </div>
</template>

<script setup>
import BioText from "@/components/homeComponents/BioText.vue";
import MyApproach from "@/components/homeComponents/MyApproach.vue";
import TechStack from "@/components/homeComponents/TechStack/TechStack.vue";
import SelectedProjects from "@/components/homeComponents/SelectedProjects.vue";
</script>

<style lang="scss"></style>
