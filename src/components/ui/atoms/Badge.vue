<template>
    <span class="badge">{{ label }}</span>
</template>

<script setup>
defineProps({
    label: { type: String, required: true },
});
</script>

<style lang="scss">
.badge {
    padding: 4px 8px;
    border-radius: 100px;
    background: var(--blue-20);

    font-size: 14px;
    font-weight: 500;
    color: var(--primary-blue);
    white-space: nowrap;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
