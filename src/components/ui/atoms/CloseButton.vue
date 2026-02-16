<template>
    <button
        class="bg-fourth-gray! hover:bg-third-white! flex h-7 w-7 items-center justify-center rounded-[100px] p-1! transition duration-200"
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
