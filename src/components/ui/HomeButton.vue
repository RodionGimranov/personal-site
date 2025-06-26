<template>
    <RouterLink to="/" class="router_to_home" :class="[variantClass]">
        <svg
            width="21"
            height="26"
            viewBox="0 0 21 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.110695 6.63126V25.5873H4.65884V16.2537H9.46606L14.6504 25.5873L20.1655 25.6236L14.4184 15.5568C14.6563 15.4503 14.8889 15.3315 15.116 15.2005C16.3575 14.4742 17.3364 13.5057 18.0526 12.2951C18.7927 11.0603 19.1628 9.71659 19.1628 8.2639C19.1628 6.73856 18.7927 5.37059 18.0526 4.16002C17.3364 2.92523 16.3575 1.95676 15.116 1.25463C13.8745 0.528276 12.5017 0.1651 10.9976 0.1651H0.110695V4.41424H4.65884H10.2097C11.0453 4.41424 11.7855 4.58374 12.4301 4.92269C13.0747 5.26164 13.5761 5.72167 13.9342 6.30275C14.2923 6.88383 14.4714 7.57386 14.4714 8.37285C14.4714 9.07497 14.3281 9.71659 14.0416 10.2977C13.7551 10.8788 13.3493 11.3388 12.824 11.6777C12.3226 11.9925 11.7258 12.1499 11.0334 12.1499H4.65884V6.63126H0.110695Z"
                :fill="iconColor"
            />
        </svg>
    </RouterLink>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    variant: {
        type: String,
        default: "default",
    },
});

const variantClass = computed(() => {
    return props.variant === "dark" ? "router_dark" : "router_default";
});

const iconColor = computed(() => {
    return props.variant === "dark" ? "#ffffff" : "var(--icon-color)";
});
</script>

<style lang="scss">
.router_to_home {
    width: 46px;
    height: 46px;
    transition: 0.2s;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.router_default:hover {
        background: var(--hover-color);
    }

    &.router_dark:hover {
        background: #272727;
    }
}
</style>
