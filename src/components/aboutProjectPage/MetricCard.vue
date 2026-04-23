<template>
    <div
        class="commom_card_style flex h-[158px] w-[295px] flex-col items-start justify-between p-[22px]!"
    >
        <p class="text-primary-dark text-lg leading-7 font-medium">
            {{ label }}
        </p>
        <div class="flex w-full items-end justify-start gap-4">
            <v-pie
                :size="70"
                inner-cut="70"
                hover-scale="0"
                hide-slice
                :items="items"
                :palette="[color, '#f0f0f0']"
            />
            <p class="text-primary-dark text-[22px] leading-[30px] font-medium">
                {{ value }} / 100
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
    label: string;
    value: number;
}

const props = withDefaults(defineProps<Props>(), {
    label: "",
    value: 0,
});

const color = computed(() => {
    if (props.value >= 90) return "#00CC66"; // green
    if (props.value >= 50) return "#FFAA33"; // orange
    return "#FF3333"; // red
});

const items = computed(() => [
    {
        key: 1,
        title: "value",
        value: props.value,
    },
    {
        key: 2,
        title: "rest",
        value: 100 - props.value,
    },
]);
</script>
