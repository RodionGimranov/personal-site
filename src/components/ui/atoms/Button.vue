<template>
    <slot
        v-if="isRouter"
        :class="mergedClasses"
        :aria-disabled="disabled || undefined"
        @click="onRouterClick"
    >
        <SvgIcon v-if="icon" :name="icon!" :width="iconWidth" :height="iconHeight" />
        <span v-if="buttonText"> {{ buttonText }} </span>
    </slot>
    <component v-else :is="componentTag" :class="mergedClasses" v-bind="componentAttrs">
        <SvgIcon v-if="icon" :name="icon!" :width="iconWidth" :height="iconHeight" />
        <span v-if="buttonText"> {{ buttonText }} </span>
    </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

type ButtonType = "default" | "external" | "router";
type ButtonVariant = "_gray" | "_dark" | "_blue" | "_side-bar";
type PaddingVariant = "default" | "compact";
type ShapeVariant = "regular" | "pill";

const props = withDefaults(
    defineProps<{
        buttonText?: string;
        buttonType?: ButtonType;
        variant?: ButtonVariant;
        padding?: PaddingVariant;
        shape?: ShapeVariant;

        icon?: string;
        iconWidth?: number;
        iconHeight?: number;

        disabled?: boolean;

        target?: "_self" | "_blank";
        rel?: string;
    }>(),
    {
        buttonText: "Label",
        buttonType: "default",
        variant: "_gray",
        padding: "default",
        shape: "pill",

        icon: undefined,
        iconWidth: 20,
        iconHeight: 20,

        disabled: false,

        target: "_blank",
        rel: "noopener noreferrer",
    },
);

const attrs = useAttrs();

const isRouter = computed(() => props.buttonType === "router");
const componentTag = computed(() => (props.buttonType === "external" ? "a" : "button"));

const mergedClasses = computed(() => [
    "custom_btn",
    `variant-${props.variant.replace("_", "")}`,
    `shape-${props.shape}`,
    `pad-${props.padding}`,
    { "is-disabled": props.disabled },
    attrs.class,
]);

const componentAttrs = computed(() => {
    if (props.buttonType === "default") {
        return {
            ...attrs,
            type: "button",
            disabled: props.disabled,
        };
    }

    if (props.buttonType === "external") {
        const { href, ...rest } = attrs;

        return {
            ...rest,
            href: props.disabled ? undefined : href,
            target: props.disabled ? undefined : props.target,
            rel: props.disabled ? undefined : props.rel,
            "aria-disabled": props.disabled || undefined,
            tabindex: props.disabled ? -1 : undefined,
            onClick: props.disabled ? prevent : undefined,
        };
    }

    return attrs;
});

function prevent(e: Event) {
    e.preventDefault();
    e.stopPropagation();
}

function onRouterClick(e: Event) {
    if (!props.disabled) return;
    e.preventDefault();
    e.stopPropagation();
}
</script>

<style lang="scss">
.custom_btn {
    cursor: pointer;
    transition: 0.2s;

    font-size: 16px;
    font-weight: 400;
    text-decoration: none;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 6px;

    &.is-disabled {
        opacity: 0.7;
        pointer-events: none;
    }

    // Padding
    &.pad-default {
        padding: 8px 16px;
    }
    &.pad-compact {
        padding: 8px 10px;
    }

    // Shape
    &.shape-regular {
        border-radius: 12px;
    }
    &.shape-pill {
        border-radius: 100px;
    }

    // Color
    &.variant-gray {
        background: var(--fourth-gray);
        color: var(--primary-dark);

        &:hover {
            background: var(--third-white);
        }
    }

    &.variant-dark {
        background: var(--primary-dark);
        color: var(--primary-white);

        &:hover {
            background: var(--secondary-dark);
        }
    }

    &.variant-blue {
        background: var(--primary-blue);
        color: var(--primary-white);

        &:hover {
            background: var(--secondary-blue);
        }
    }

    &.variant-side-bar {
        width: 100%;
        background: transparent;
        transition: none !important;
        color: var(--third-gray);
        display: inline-flex;
        align-items: center;

        &:hover {
            background: var(--secondary-white);
        }

        &._active {
            background: var(--secondary-white);
            color: var(--primary-dark);
        }
    }
}
</style>
