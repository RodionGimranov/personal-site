<template>
    <span class="badge" :class="badgeClasses">
        {{ label }}
    </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    label: { type: String, required: true, default: "Label" },
    size: {
        type: String,
        default: "small",
        validator: (v) => ["default", "small"].includes(v),
    },
    color: {
        type: String,
        default: "gray",
        validator: (v) => ["gray", "purple", "blue", "green"].includes(v),
    },
    rounded: {
        type: String,
        default: "square",
        validator: (v) => ["square", "pill"].includes(v),
    },
});

const badgeClasses = computed(() => [
    props.color,
    `size-${props.size}`,
    `rounded-${props.rounded}`,
]);
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

.rounded-square {
    border-radius: 6px;
}

.rounded-pill {
    border-radius: 100px;
}

.gray {
    background: rgba(82, 82, 92, 0.1);
    color: #3f3f46;
}

.blue {
    background: var(--blue-20);
    color: var(--primary-blue);
}

.green {
    background: rgba(154, 230, 0, 0.2);
    color: #497d00;
}

.purple {
    background: rgba(173, 70, 255, 0.15);
    color: #8200db;
}
</style>
