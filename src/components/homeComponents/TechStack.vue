<template>
    <section class="common_home_section_style tech_stack_section" ref="techSection">
        <p class="common_home_section_title">{{ $t("message.tech_stack_home_section_title") }}</p>
        <div class="tech_stack_card_wrapper">
            <div class="tech_stack_card" ref="card1">
                <VueEcosystem />
            </div>
            <div class="tech_stack_card" ref="card2">
                <JsTsEnvironment />
            </div>
        </div>
    </section>
</template>

<script setup>
import VueEcosystem from "@/components/homeComponents/TechStack/VueEcosystem.vue";
import JsTsEnvironment from "@/components/homeComponents/TechStack/JsTsEnvironment.vue";

import { useStackingCards } from "@/libs/gsap/StackingCards.js";

const { techSection, card1, card2 } = useStackingCards();
</script>

<style lang="scss">
.tech_stack_section {
    padding-top: 100px;

    .tech_stack_card_wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
}
</style>
