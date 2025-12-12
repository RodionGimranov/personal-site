<template>
    <component
        :is="buttonType"
        class="btn"
        :class="variant"
        :style="{ fontSize, fontWeight, width: buttonWidth }"
        :to="buttonType === 'router-link' ? to : undefined"
        :href="buttonType === 'a' ? href : undefined"
        :target="buttonType === 'a' ? '_blank' : undefined"
    >
        <slot name="custom_btn_icon" />
        {{ buttonText }}
        <slot />
    </component>
</template>

<script setup>
defineProps({
    buttonText: { type: String, default: "Label" },
    buttonType: { type: String, default: "button" },
    to: { type: String, default: "" },
    href: { type: String, default: "#" },
    variant: { type: String, default: "_default" },
    fontSize: { type: String, default: "16px" },
    fontWeight: { type: String, default: "500" },
    buttonWidth: { type: String, default: "auto" },
});
</script>

<style lang="scss">
.btn {
    cursor: pointer;
    transition: 0.2s;
    padding: 8px 16px;
    border-radius: 100px;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &._default {
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
