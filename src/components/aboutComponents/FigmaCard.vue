<template>
    <div
        class="figma_card_container relative w-62.5 h-62.5 flex flex-col justify-between items-start cursor-none p-4! overflow-visible! common_bento_card_style commom_card_style"
        @mousemove="onMouseMove"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div class="figma_card_header flex flex-col justify-start items-start gap-3">
            <img
                src="https://res.cloudinary.com/dii7e7hu0/image/upload/v1758382906/Figma-icon_bryhxb.svg"
                alt="Figma Icon"
                class="pointer-events-none"
            />
            <p class="text-base text-primary-dark font-normal">
                {{ $t("message.figma_card_title") }}
            </p>
        </div>
        <a :href="FIGMA_DESIGN_URL" target="_blank" rel="noopener noreferrer">
            <Button
                as="span"
                variant="_blue"
                :buttonText="$t('message.visit_btn')"
                buttonWidth="100%"
            />
        </a>
        <transition name="fade-scale">
            <div
                v-show="isHovered"
                class="figma_bubble_wrapper"
                :style="{ top: cursorTextY + 'px', left: cursorTextX + 'px' }"
            >
                <p class="test-base font-normal text-primary-white leading-4.25 whitespace-nowrap">
                    {{ $t("message.figma_bubble_text") }}
                </p>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { FIGMA_DESIGN_URL } from "@/constants/appConstants";

import Button from "@/components/ui/atoms/Button.vue";

const cursorX = ref<number>(0);
const cursorY = ref<number>(0);
const isHovered = ref<boolean>(false);

const cursorTextX = computed<number>(() => cursorX.value + 13);
const cursorTextY = computed<number>(() => cursorY.value + 15);

function onMouseMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) return;

    const rect = target.getBoundingClientRect();

    cursorX.value = event.clientX - rect.left;
    cursorY.value = event.clientY - rect.top;
}
</script>

<style lang="scss">
.figma_card_container {
    cursor:
        url("../../assets/images/figma-cursor.svg") 6 4,
        auto;
}

.figma_bubble_wrapper {
    position: absolute;
    z-index: 9;
    padding: 8px 16px;
    pointer-events: none;
    outline-offset: -2px;
    background: var(--primary-green);
    border-radius: 2px 24px 24px 24px;
    outline: 2px solid var(--secondary-green);
    box-shadow:
        0 20px 18px rgba(0, 0, 0, 0.05),
        0 12.963px 10.5417px rgba(0, 0, 0, 0.038),
        0 7.7037px 5.73333px rgba(0, 0, 0, 0.03),
        0 4px 2.925px rgba(0, 0, 0, 0.025),
        0 1.62963px 1.46667px rgba(0, 0, 0, 0.02),
        0 0.37037px 0.708333px rgba(0, 0, 0, 0.012);
}
</style>
