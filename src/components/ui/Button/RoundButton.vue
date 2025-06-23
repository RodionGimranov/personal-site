<template>
    <button
        class="round_button"
        :class="['btn', variant]"
        :style="buttonStyle"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click="handleClick"
    >
        <slot />
    </button>
</template>

<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["click"]);

const props = defineProps({
    variant: { type: String, default: "default" },
    buttonWidth: { type: String, default: "46px" },
    buttonHeight: { type: String, default: "46px" },
});

const hover = ref(false);

const variants = {
    default: {
        backgroundColor: "#f0f0f0",
        hoverBackgroundColor: "#e7e7e7",
    },
    dark: {
        backgroundColor: "#111111",
        hoverBackgroundColor: "#2e2e2e",
        boxShadow: "0px 0px 5px rgba(255, 255, 255, 0.25)",
    },
};

const buttonStyle = computed(() => {
    const style = variants[props.variant] || variants.default;

    return {
        backgroundColor: hover.value ? style.hoverBackgroundColor : style.backgroundColor,
        width: props.buttonWidth,
        height: props.buttonHeight,
        boxShadow: style.boxShadow || "none",
    };
});

function handleClick(event) {
    emit("click", event);
}
</script>

<style lang="scss">
.round_button {
    transition: 0.2s;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
