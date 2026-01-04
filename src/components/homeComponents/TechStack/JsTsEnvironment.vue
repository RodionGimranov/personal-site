<template>
    <div class="tech_stack_card_container js_ts_environment commom_card_style">
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
                    :label="tech"
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

import TechnologyTag from "@/components/ui/atoms/TechnologyTag.vue";
import technologyData from "@/data/technology.json";

import { prepareTechnologyRows } from "@/utils/technologyRows";

const ROWS_COUNT = 5;

const duplicatedRows = computed(() =>
    prepareTechnologyRows(technologyData.technologies, ROWS_COUNT),
);
</script>

<style lang="scss">
.js_ts_environment {
    justify-content: flex-end !important;
}

.technology_list_wrapper {
    position: absolute;
    top: 22px;
    left: 22px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.technology_list {
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
