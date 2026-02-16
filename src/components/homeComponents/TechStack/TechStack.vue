<template>
    <section class="common_home_section_style">
        <p class="common_home_section_title">
            {{ $t("home.tech_stack_home_section_title") }}
        </p>
        <div class="flex w-full flex-col items-center justify-start gap-12.5">
            <div class="tech_stack_card">
                <VueEcosystem />
            </div>
            <div class="tech_stack_card">
                <JsTsEnvironment />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import VueEcosystem from "@/components/homeComponents/TechStack/VueEcosystem.vue";
import JsTsEnvironment from "@/components/homeComponents/TechStack/JsTsEnvironment.vue";
</script>

<style lang="scss"></style>
