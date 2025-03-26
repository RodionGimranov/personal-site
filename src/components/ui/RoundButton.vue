<template>
    <button class="round_button" :style="{ width: roundButtonWidth, height: roundButtonHeight }">
        <svg class="cross_icon" :width="crossIconWidth" :height="crossIconHeight">
            <use xlink:href="/images/svg/sprite.svg#cross-icon"></use>
        </svg>
    </button>
</template>

<script setup>
const props = defineProps({
    roundButtonWidth: { type: String, default: "38px" },
    roundButtonHeight: { type: String, default: "38px" },
    crossIconWidth: { type: String, default: "18px" },
    crossIconHeight: { type: String, default: "18px" },
});
</script>

<style lang="scss">
.round_button {
    transition: 0.2s;
    border-radius: 100px;
    background: $button_default;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: $button_hover;
    }

    &:active {
        background: $button_active;
    }
}
</style>
