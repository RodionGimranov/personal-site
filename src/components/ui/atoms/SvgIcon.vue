<template>
    <svg class="svg_icon" aria-hidden="true" :width="width" :height="height">
        <use :href="`/personal-site/sprite.svg#${name}`" />
    </svg>
</template>

<script setup>
const props = defineProps({
    name: { type: String, required: true },
    width: { type: Number, default: 20 },
    height: { type: Number, default: 20 },
});
</script>

<style scoped lang="scss">
.svg_icon {
    overflow: visible;
    fill: currentColor;
    display: inline-block;
}
</style>
