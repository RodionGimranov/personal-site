<template>
    <section class="common_home_section_style pt-37.5!">
        <p class="common_home_section_title">
            {{ $t("home.tech_stack_home_section_title") }}
        </p>
        <div class="w-full flex flex-col justify-start items-center gap-12.5">
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
