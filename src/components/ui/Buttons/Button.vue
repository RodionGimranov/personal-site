<template>
    <component
        :is="buttonType"
        :class="['btn', variant]"
        :style="buttonStyle"
        :to="buttonType === 'router-link' ? to : undefined"
        :href="buttonType === 'a' ? href : undefined"
        :target="buttonType === 'a' ? '_blank' : undefined"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <slot name="custom_btn_icon" />
        {{ buttonText }}
        <slot />
    </component>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    buttonText: { type: String, default: "Label" },
    buttonType: { type: String, default: "button" },
    to: { type: String, default: "" },
    href: { type: String, default: "#" },
    variant: { type: String, default: "default" },
    buttonWidth: { type: String, default: "auto" },
    buttonHeight: { type: String, default: "auto" },
    padding: { type: String, default: "8px 16px" },
    buttonGap: { type: String, default: "6px" },
    fontSize: { type: String, default: "16px" },
    fontWeight: { type: String, default: "500" },
});

const hover = ref(false);

const variants = {
    default: {
        backgroundColor: "#f0f0f0",
        hoverBackgroundColor: "#e7e7e7",
        textColor: "#111111",
    },
    "blue-v1": {
        backgroundColor: "#2976FF",
        hoverBackgroundColor: "#4487FF",
        textColor: "#ffffff",
    },
    "dark-v1": {
        backgroundColor: "#111111",
        hoverBackgroundColor: "#2E2E2E",
        textColor: "#ffffff",
    },
};

const buttonStyle = computed(() => {
    const style = variants[props.variant] || variants.default;

    return {
        backgroundColor: hover.value ? style.hoverBackgroundColor : style.backgroundColor,
        color: style.textColor,
        border: `${style.borderSize} solid ${hover.value ? style.hoverBorderColor : style.borderColor}`,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        padding: props.padding,
        width: props.buttonWidth,
        height: props.buttonHeight,
        gap: props.buttonGap,
    };
});
</script>

<style lang="scss">
.btn {
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
