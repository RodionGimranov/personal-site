<template>
    <button
        class="fixed right-6 bottom-4 z-9998 flex h-11 w-11 items-center justify-center rounded-full bg-primary-dark! py-[15px] px-[10px] text-primary-white transition duration-200 hover:bg-secondary-dark! active:scale-[0.97]"
        @click="emit('click')"
    >
        <SvgIcon name="arrow-icon" :width="24" :height="14" />
    </button>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

const emit = defineEmits<{
    (event: "click"): void;
}>();
</script>

<style lang="scss"></style>
