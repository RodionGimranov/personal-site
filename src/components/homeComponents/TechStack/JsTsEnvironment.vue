<template>
    <div class="tech_stack_card_container commom_card_style">
        <div class="technology_list_wrapper">
            <div
                v-for="(list, index) in duplicatedRows"
                :key="index"
                class="technology_list"
                :class="{ move_right: index % 2 === 0, move_left: index % 2 !== 0 }"
            >
                <TechnologyTag
                    v-for="(tech, techIndex) in list"
                    :key="tech + '-' + techIndex"
                    :name="tech"
                />
            </div>
        </div>
        <div class="tech_stack_text">
            <p class="tech_stack_title">{{ $t("message.tech_stack_card_title_2") }}</p>
            <p class="tech_stack_subtitle">{{ $t("message.tech_stack_card_subtitle_2") }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import TechnologyTag from "@/components/ui/TechnologyTag/TechnologyTag.vue";

const technology_list_left = [
    "Vue",
    "Vuex",
    "Vue Router",
    "Vue i18n",
    "VueUse",
    "Vue Lottie",
    "Nuxt",
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "Nest",
    "Storybook",
    "Pinia",
];

const technology_list_right = [
    "Prisma",
    "Python",
    "C++",
    "C#",
    "Vite",
    "GSAP",
    "Axios",
    "Matter.js",
    "Day.js",
    "Vanilla-tilt.js",
    "ECharts",
    "ldrsx",
    "Highcharts",
    "Node.js",
];

const technology_rows = computed(() => [
    technology_list_left,
    technology_list_right,
    technology_list_left,
    technology_list_right,
    technology_list_left,
]);

const duplicatedRows = computed(() => technology_rows.value.map((row) => [...row, ...row]));
</script>

<style lang="scss">
.tech_stack_card_container {
    width: 514px;
    height: 348px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.technology_list_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.technology_list {
    width: 100%;
    display: flex;
    gap: 6px;
}

@keyframes scroll-right {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

@keyframes scroll-left {
    0% {
        transform: translateX(-5%);
    }
    100% {
        transform: translateX(-105%);
    }
}

.move_right {
    animation: scroll-right 30s linear infinite;
}

.move_left {
    animation: scroll-left 30s linear infinite;
}
</style>
