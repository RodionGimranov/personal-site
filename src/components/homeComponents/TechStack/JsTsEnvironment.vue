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

const row1 = [
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
];

const row2 = [
    "JavaScript",
    "TypeScript",
    "Nest",
    "Storybook",
    "Pinia",
    "PrismaORM",
    "Python",
    "C++",
    "C#",
    "Vite",
];

const row3 = [
    "GSAP",
    "Axios",
    "Matter.js",
    "Day.js",
    "Vanilla-tilt.js",
    "ECharts",
    "ldrsx",
    "Highcharts",
    "Node.js",
    "Mapbox GL",
];

const row4 = [
    "GitHub Pages",
    "SQL",
    "PostgreSQL",
    "Postman",
    "GitHub",
    "Express",
    "Git",
    "Prettier",
    "Cloudinary",
    "Telegram Mini Apps",
];

const row5 = ["Webpack", "REST API", "MongoDB", "Three.js", "ESLint", "Docker", "Stylelint", "PHP"];

const technology_rows = computed(() => [row1, row2, row3, row4, row5]);

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
