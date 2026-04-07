<template>
    <div class="divider bg-black-10" :class="dividerClasses"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type DividerType = "horizontal" | "vertical";

const props = withDefaults(
    defineProps<{
        type?: DividerType;
    }>(),
    {
        type: "horizontal",
    },
);

const dividerClasses = computed(() => [`divider-${props.type}`]);
</script>

<style lang="scss">
.divider-horizontal {
    width: 100%;
    min-height: 1px;
    max-height: 1px;
}
.divider-vertical {
    height: 100%;
    min-width: 1px;
    max-width: 1px;
}
</style>
