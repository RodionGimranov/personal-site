<template>
    <span class="badge" :class="badgeClasses">
        {{ label }}
    </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

type BadgeSize = "small" | "medium";
type BadgeShape = "regular" | "pill";
type BadgeColor = "gray" | "purple" | "blue" | "green";

const props = withDefaults(
    defineProps<{
        label?: string;
        size?: BadgeSize;
        shape?: BadgeShape;
        color?: BadgeColor;
    }>(),
    {
        label: "Label",
        size: "small",
        shape: "regular",
        color: "gray",
    },
);

const badgeClasses = computed(() => [props.color, `size-${props.size}`, `shape-${props.shape}`]);
</script>

<style lang="scss">
.badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    font-weight: 500;
    line-height: 20px;
}

.size-small {
    padding: 2px 6px;
    font-size: 12px;
}

.size-medium {
    padding: 4px 8px;
    font-size: 14px;
}

.shape-regular {
    border-radius: 6px;
}

.shape-pill {
    border-radius: 100px;
}

.gray {
    background: var(--gray-10);
    color: var(--sixth-dark);
}

.blue {
    background: var(--blue-20);
    color: var(--primary-blue);
}

.green {
    background: var(--green-20);
    color: var(--third-green);
}

.purple {
    background: var(--purple-15);
    color: var(--primary-purple);
}
</style>
