<template>
    <div
        class="figma_card_container common_bento_card_style commom_card_style relative flex h-[250px] w-[250px] cursor-none flex-col items-start justify-between overflow-visible! p-4!"
        @mousemove="onMouseMove"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div class="figma_card_header flex flex-col items-start justify-start gap-3">
            <img
                src="https://storage.yandexcloud.net/personal-site-assets/icons/Figma.svg"
                alt="Figma Icon"
                class="pointer-events-none"
            />
            <p class="text-primary-dark text-base font-normal">Figma UI Kit</p>
        </div>
        <Button
            buttonType="external"
            :href="FIGMA_DESIGN_URL"
            variant="_blue"
            :buttonText="$t('projectsLocale.visit_btn')"
        />
        <div
            v-show="isHovered"
            class="figma_bubble_wrapper bg-primary-green outline-secondary-green pointer-events-none absolute z-9 rounded-[2px_24px_24px_24px] px-4! py-2! outline-2 -outline-offset-2"
            :style="{ top: cursorTextY + 'px', left: cursorTextX + 'px' }"
        >
            <p class="text-primary-white text-base leading-[17px] font-normal whitespace-nowrap">
                {{ $t("about.figma_bubble_text") }}
            </p>
        </div>
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
    box-shadow:
        0 20px 18px rgba(0, 0, 0, 0.05),
        0 12.963px 10.5417px rgba(0, 0, 0, 0.038),
        0 7.7037px 5.73333px rgba(0, 0, 0, 0.03),
        0 4px 2.925px rgba(0, 0, 0, 0.025),
        0 1.62963px 1.46667px rgba(0, 0, 0, 0.02),
        0 0.37037px 0.708333px rgba(0, 0, 0, 0.012);
}
</style>
