<template>
    <component
        :is="as"
        :disabled="disabled"
        class="custom_btn"
        :class="[variant, { _disabled: disabled }]"
        :style="{ fontSize, fontWeight, width: buttonWidth }"
        @click="handleClick"
    >
        {{ buttonText }}
    </component>
</template>

<script setup>
const props = defineProps({
    buttonText: { type: String, default: "Label" },
    as: { type: String, default: "button" },
    variant: { type: String, default: "_gray" },
    fontSize: { type: String, default: "16px" },
    fontWeight: { type: String, default: "400" },
    buttonWidth: { type: String, default: "auto" },
    disabled: { type: Boolean, default: false },
});

function handleClick(event) {
    if (props.disabled) {
        event.preventDefault();
        event.stopPropagation();
    }
}
</script>

<style lang="scss">
.custom_btn {
    cursor: pointer;
    transition: 0.2s;
    padding: 8px 16px;
    border-radius: 100px;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
        transform: scale(0.97);
    }

    &._disabled {
        opacity: 0.7;
        pointer-events: none;
    }

    &._gray {
        background: $fourth_gray;
        color: $primary_dark;

        &:hover {
            background: $third_white;
        }
    }

    &._dark {
        background: $primary_dark;
        color: $primary_white;

        &:hover {
            background: $secondary_dark;
        }
    }

    &._blue {
        background: $primary_blue;
        color: $primary_white;

        &:hover {
            background: $secondary_blue;
        }
    }
}
</style>
