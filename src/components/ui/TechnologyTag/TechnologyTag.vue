<template>
    <span class="technology_item">{{ label }}</span>
</template>

<script setup>
defineProps({
    label: { type: String, required: true },
});
</script>

<style lang="scss">
.technology_item {
    padding: 4px 8px;
    border-radius: 100px;
    background: $blue_20;

    font-size: 14px;
    font-weight: 500;
    color: $primary_blue;
    white-space: nowrap;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
