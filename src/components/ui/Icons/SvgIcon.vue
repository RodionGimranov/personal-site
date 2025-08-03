<template>
    <svg class="svg_icon" aria-hidden="true" :width="width" :height="height">
        <use :href="`/personal-site-beta/sprite.svg#${name}`" />
    </svg>
</template>

<script setup>
defineProps({
    name: { type: String, required: true },
    width: { type: [String, Number], default: 20 },
    height: { type: [String, Number], default: 20 },
});
</script>

<style lang="scss" scoped>
.svg_icon {
    overflow: visible;
    fill: currentColor;
    display: inline-block;
}
</style>
