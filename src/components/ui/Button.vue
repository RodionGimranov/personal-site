<template>
    <component
        class="custom_button"
        :is="buttonType"
        :style="buttonStyle"
        :to="buttonType === 'router-link' ? to : undefined"
        :href="buttonType === 'a' ? href : undefined"
        :target="buttonType === 'a' ? '_blank' : undefined"
        >{{ buttonTitle }}

        <svg
            v-if="withIcon"
            class="arrow_icon"
            width="9"
            height="13"
            viewBox="0 0 9 13"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.04199 12L7.04122 7.28632C7.5508 6.88594 7.55079 6.11406 7.04122 5.71368L1.04199 1"
                stroke-width="2.5"
                stroke-linecap="round"
            />
        </svg>
    </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    buttonTitle: { type: String, default: "Label", requiered: true },
    buttonType: { type: String, default: "button" },
    to: { type: String, default: "" },
    href: { type: String, default: "#" },
    withIcon: { type: Boolean, default: false },
    buttonWidth: { type: String, default: "auto" },
    padding: { type: String, default: "8px 18px" },
    buttonBackdropFilter: { type: String, defaul: "0px" },
    fontSize: { type: String, default: "16px" },
    fontWeight: { type: String, default: "400" },
});

const buttonStyle = computed(() => {
    return {
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        padding: props.padding,
        width: props.buttonWidth,
        "backdrop-filter": props.buttonBackdropFilter,
    };
});
</script>

<style lang="scss">
.custom_button {
    transition: 0.2s;
    border-radius: 100px;
    background: $button_default;

    color: $third_gray;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: $primary_white;
        background: $button_hover;
    }

    &:active {
        background: $button_active;
    }
}

.arrow_icon {
    fill: none;
    transition: 0.2s;
    margin-left: 10px;
    stroke: $third_gray;
}

.custom_button:hover .arrow_icon {
    margin-left: 15px;
    stroke: $primary_white;
}
</style>
