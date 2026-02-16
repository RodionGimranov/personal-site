<template>
    <slot
        v-if="isRouter"
        :class="mergedClasses"
        :style="inlineStyles"
        :aria-disabled="disabled || undefined"
        @click="onRouterClick"
    />
    <component
        v-else
        :is="componentTag"
        :class="mergedClasses"
        :style="inlineStyles"
        v-bind="componentAttrs"
    >
        {{ buttonText }}
    </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

type ButtonType = "default" | "external" | "router";
type ButtonVariant = "_gray" | "_dark" | "_blue";

const props = withDefaults(
    defineProps<{
        buttonText?: string;
        buttonType?: ButtonType;
        variant?: ButtonVariant;
        fontSize?: string;
        fontWeight?: string;
        disabled?: boolean;
        target?: "_self" | "_blank";
        rel?: string;
    }>(),
    {
        buttonText: "Label",
        buttonType: "default",
        variant: "_gray",
        fontSize: "16px",
        fontWeight: "400",
        disabled: false,
        target: "_blank",
        rel: "noopener noreferrer",
    },
);

const attrs = useAttrs();

const isRouter = computed(() => props.buttonType === "router");
const componentTag = computed(() => (props.buttonType === "external" ? "a" : "button"));

const baseClasses =
    "custom_btn cursor-pointer rounded-[100px] transition duration-200 flex justify-between items-center py-2! px-4! active:scale-[0.97] no-underline";

const mergedClasses = computed(() => [
    baseClasses,
    props.variant,
    attrs.class,
    props.disabled && "opacity-70 pointer-events-none cursor-not-allowed",
]);

const inlineStyles = computed(() => ({
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
}));

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
