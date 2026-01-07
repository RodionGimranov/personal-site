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
        background: var(--fourth-gray);
        color: var(--primary-dark);

        &:hover {
            background: var(--third-white);
        }
    }

    &._dark {
        background: var(--primary-dark);
        color: var(--primary-white);

        &:hover {
            background: var(--secondary-dark);
        }
    }

    &._blue {
        background: var(--primary-blue);
        color: var(--primary-white);

        &:hover {
            background: var(--secondary-blue);
        }
    }
}
</style>
