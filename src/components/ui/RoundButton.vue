<template>
    <button class="round_button" :style="{ width: roundButtonWidth, height: roundButtonHeight }">
        <img
            class="cross_icon"
            :src="close_icon"
            :style="{ width: crossIconWidth, height: crossIconHeight }"
            alt="Cross icon"
        />
    </button>
</template>

<script setup>
import close_icon from "../../assets/images/svg/cross-icon.svg";

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
