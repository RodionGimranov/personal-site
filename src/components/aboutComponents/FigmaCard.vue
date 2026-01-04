<template>
    <div
        class="figma_card_container common_bento_card_style commom_card_style"
        @mousemove="onMouseMove"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div class="figma_card_header">
            <img
                src="https://res.cloudinary.com/dii7e7hu0/image/upload/v1758382906/Figma-icon_bryhxb.svg"
                alt="Figma Icon"
            />
            <p class="figma_card_title">{{ $t("message.figma_card_title") }}</p>
        </div>
        <Button
            variant="_blue"
            buttonType="a"
            :href="FIGMA_DESIGN_URL"
            :buttonText="$t('message.visit_btn')"
            buttonWidth="100%"
        />
        <transition name="fade-scale">
            <div
                v-show="isHovered"
                class="figma_bubble_wrapper"
                :style="{ top: cursorTextY + 'px', left: cursorTextX + 'px' }"
            >
                <p>{{ $t("message.figma_bubble_text") }}</p>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { FIGMA_DESIGN_URL } from "@/constants/appConstants.js";

import Button from "@/components/ui/atoms/Button.vue";

const cursorX = ref(0);
const cursorY = ref(0);
const isHovered = ref(false);

const cursorTextX = computed(() => cursorX.value + 13);
const cursorTextY = computed(() => cursorY.value + 15);

function onMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    cursorX.value = event.clientX - rect.left;
    cursorY.value = event.clientY - rect.top;
}
</script>

<style lang="scss">
.figma_card_container {
    position: relative;
    width: 250px;
    height: 250px;
    cursor: none;
    padding: 16px !important;
    overflow: visible !important;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    cursor:
        url("../../assets/images/figma-cursor.svg") 6 4,
        auto;
}

.figma_card_header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;

    img {
        pointer-events: none;
    }
}

.figma_bubble_wrapper {
    position: absolute;
    z-index: 9;
    padding: 8px 16px;
    pointer-events: none;
    outline-offset: -2px;
    background: $primary_green;
    border-radius: 2px 24px 24px 24px;
    outline: 2px solid $secondary_green;
    box-shadow:
        0 20px 18px rgba(0, 0, 0, 0.05),
        0 12.963px 10.5417px rgba(0, 0, 0, 0.038),
        0 7.7037px 5.73333px rgba(0, 0, 0, 0.03),
        0 4px 2.925px rgba(0, 0, 0, 0.025),
        0 1.62963px 1.46667px rgba(0, 0, 0, 0.02),
        0 0.37037px 0.708333px rgba(0, 0, 0, 0.012);

    p {
        font-size: 16px;
        font-weight: 400;
        color: $primary_white;
        line-height: 17px;
        white-space: nowrap;
    }
}
</style>
