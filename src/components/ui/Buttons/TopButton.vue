<template>
    <button class="top_btn" @click="$emit('click')">
        <SvgIcon name="arrow-icon" width="24px" height="14px" />
    </button>
</template>

<script setup>
import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";
</script>

<style lang="scss">
.top_btn {
    position: fixed;
    top: calc(100% - 76px);
    right: 32px;
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
        background: $third_dark;
    }
}
</style>
