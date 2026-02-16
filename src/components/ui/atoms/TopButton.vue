<template>
    <button
        class="bg-primary-dark! text-primary-white hover:bg-secondary-dark! fixed right-4 bottom-4 z-9998 flex h-11 w-11 items-center justify-center rounded-full px-[10px] py-[15px] transition duration-200 active:scale-[0.97]"
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
