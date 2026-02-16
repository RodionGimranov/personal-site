<template>
    <button
        class="w-7 h-7 p-1! rounded-[100px] flex justify-center items-center bg-fourth-gray! hover:bg-third-white! transition duration-200"
        @click="emit('click')"
    >
        <SvgIcon name="cross-icon" />
    </button>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

const emit = defineEmits<{
    (event: "click"): void;
}>();
</script>

<style lang="scss"></style>
