<template>
    <div class="tech_stack_card_container commom_card_style justify-end!">
        <div class="technology_list_wrapper absolute top-5.5 left-5.5 flex w-full flex-col gap-1.5">
            <div
                v-for="(list, index) in duplicatedRows"
                :key="index"
                class="flex gap-1.5"
                :class="{ move_right: index % 2 === 0, move_left: index % 2 !== 0 }"
            >
                <Badge
                    v-for="(tech, techIndex) in list"
                    :key="tech + '-' + techIndex"
                    :label="tech"
                    size="medium"
                    color="blue"
                    shape="pill"
                />
            </div>
        </div>
        <div class="tech_stack_text">
            <p class="tech_stack_title">{{ $t("home.tech_stack_card_title_2") }}</p>
            <p class="tech_stack_subtitle">{{ $t("home.tech_stack_card_subtitle_2") }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { prepareTechnologyRows } from "@/utils/technologyRows";
import technologyDataJson from "@/data/technology.json";

import Badge from "@/components/ui/atoms/Badge.vue";

type TechnologyData = {
    technologies: string[];
};

const technologyData = technologyDataJson as TechnologyData;

const ROWS_COUNT = 5;

const duplicatedRows = computed<string[][]>(() => {
    return prepareTechnologyRows(technologyData.technologies, ROWS_COUNT);
});
</script>

<style lang="scss">
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
