<template>
    <div class="flex w-full flex-col items-start justify-start gap-[150px]">
        <p class="text-primary-dark w-full text-center text-4xl leading-[48px]! font-semibold">
            {{ $t("home.bio_text") }}
        </p>
        <MyApproach />
        <TechStack />
        <SelectedProjects />
    </div>
</template>

<script setup lang="ts">
import MyApproach from "@/components/homeComponents/MyApproach.vue";
import TechStack from "@/components/homeComponents/TechStack/TechStack.vue";
import SelectedProjects from "@/components/homeComponents/SelectedProjects.vue";
</script>

<style lang="scss"></style>
