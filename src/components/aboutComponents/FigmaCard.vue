<template>
    <div
        class="figma_card_container common_bento_card_style"
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
            variant="blue-v1"
            buttonType="a"
            href="#"
            :buttonText="$t('message.visit_btn')"
            buttonWidth="100%"
        />
        <transition name="fade-scale">
            <div
                v-show="isHovered"
                class="figma_cursor_text_container"
                :style="{ top: cursorTextY + 'px', left: cursorTextX + 'px' }"
            >
                <p>{{ $t("message.figma_cursor_text") }}</p>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

import Button from "@/components/ui/buttons/Button.vue";

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

.figma_cursor_text_container {
    position: absolute;
    z-index: 9;
    pointer-events: none;
    outline-offset: -2px;
    background: $primary_green;
    padding: 8px 20px 8px 16px;
    border-radius: 2px 24px 24px 24px;
    outline: 2px solid $secondary_green;
    box-shadow: 4px 4px 10px $secondary_translucent_green;

    p {
        font-size: 16px;
        font-weight: 400;
        color: $primary_white;
        white-space: nowrap;
    }
}
</style>
