<template>
    <button class="top_btn" @click="$emit('click')">
        <SvgIcon name="arrow-icon" :width="24" :height="14" />
    </button>
</template>

<script setup>
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";
</script>

<style lang="scss">
.top_btn {
    position: fixed;
    top: calc(100% - 76px);
    right: 24px;
    width: 44px;
    height: 44px;
    z-index: 9998;
    transition: 0.2s;
    padding: 15px 10px;
    border-radius: 100px;
    background: $primary_dark;

    display: flex;
    justify-content: center;
    align-items: center;

    color: $primary_white;

    &:hover {
        background: $secondary_dark;
    }
}
</style>
