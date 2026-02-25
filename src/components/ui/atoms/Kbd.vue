<template>
    <span
        class="text-primary-dark bg-fourth-gray pointer-events-none flex h-5 items-center justify-center overflow-hidden rounded-md text-sm font-normal select-none"
        :class="kbdClasses"
    >
        {{ label }}
    </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

type KbdVariant = "square" | "auto";

const props = withDefaults(
    defineProps<{
        label?: string;
        variant?: KbdVariant;
    }>(),
    {
        label: "K",
        variant: undefined,
    },
);

const resolvedVariant = computed<KbdVariant>(() => {
    if (props.variant) return props.variant;

    return props.label && props.label.length > 1 ? "auto" : "square";
});

const kbdClasses = computed(() => [`variant-${resolvedVariant.value}`]);
</script>

<style lang="scss">
.variant-square {
    width: 20px;
}

.variant-auto {
    height: 20px;
    padding: 0 4px;
}
</style>
