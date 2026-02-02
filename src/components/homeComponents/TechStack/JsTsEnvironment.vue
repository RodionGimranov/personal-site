<template>
    <div class="tech_stack_card_container js_ts_environment commom_card_style">
        <div class="technology_list_wrapper">
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
            <p class="tech_stack_title">{{ $t("message.tech_stack_card_title_2") }}</p>
            <p class="tech_stack_subtitle">{{ $t("message.tech_stack_card_subtitle_2") }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import Badge from "@/components/ui/atoms/Badge.vue";
import technologyData from "@/data/technology.json";

import { prepareTechnologyRows } from "@/utils/technologyRows.ts";

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
