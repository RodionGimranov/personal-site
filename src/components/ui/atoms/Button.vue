<template>
    <component
        class="custom_btn cursor-pointer rounded-[100px] transition duration-200 flex justify-between items-center py-2! px-4! active:scale-[0.97] no-underline"
        :class="buttonClasses"
        :style="{
            fontSize,
            fontWeight,
        }"
    >
        {{ buttonText }}
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonVariant = "_gray" | "_dark" | "_blue";

const props = withDefaults(
    defineProps<{
        buttonText?: string;
        variant?: ButtonVariant;
        fontSize?: string;
        fontWeight?: string;
    }>(),
    {
        buttonText: "Label",
        variant: "_gray",
        fontSize: "16px",
        fontWeight: "400",
    },
);

const buttonClasses = computed(() => [props.variant]);
</script>

<style lang="scss">
.custom_btn {
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
