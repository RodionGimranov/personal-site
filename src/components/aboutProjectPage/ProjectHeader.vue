<template>
    <div class="flex w-full flex-col items-center justify-start">
        <img
            ref="tiltIconRef"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
            :src="iconUrl"
            alt="Project icon"
            class="tilt-icon border-black-10 h-[110px] w-[110px] rounded-[26px] border shadow-[0px_3px_11px_0px_rgba(0,0,0,0.06)]"
        />
        <p class="text-primary-dark mt-6! mb-3! text-[32px] leading-[39px]! font-medium">
            {{ name }}
        </p>
        <div class="flex items-center justify-center gap-3">
            <Button
                buttonType="external"
                :href="codeUrl"
                :buttonText="$t('projectsLocale.source_code_btn')"
                :disabled="!codeUrl"
            />
            <Button
                buttonType="external"
                :href="deployUrl"
                variant="_blue"
                :buttonText="$t('projectsLocale.visit_btn')"
                :disabled="!deployUrl"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Button from "@/components/ui/atoms/Button.vue";

interface Props {
    name: string;
    iconUrl: string;
    codeUrl?: string;
    deployUrl?: string;
}

withDefaults(defineProps<Props>(), {
    iconUrl: "",
    codeUrl: "",
    deployUrl: "",
});

const tiltIconRef = ref<HTMLElement | null>(null);

const handleMouseMove = (e: MouseEvent) => {
    const el = tiltIconRef.value;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const dx = x - 0.5;
    const dy = y - 0.5;

    const rotateX = -dy * 18;
    const rotateY = dx * 18;

    const translateX = dx * 8;
    const translateY = dy * 8;

    el.style.transform = `
    perspective(700px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translate3d(${translateX}px, ${translateY}px, 0)
    scale(1.05)
  `;
};

const handleMouseLeave = () => {
    const el = tiltIconRef.value;
    if (!el) return;

    el.style.transform = `
    perspective(700px)
    rotateX(0deg)
    rotateY(0deg)
    translate3d(0px, 0px, 0px)
    scale(1)
  `;
};
</script>

<style lang="scss">
.tilt-icon {
    transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
}
</style>
