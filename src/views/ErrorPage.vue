<template>
    <div class="mt-37.5! flex w-full flex-col items-center justify-center gap-3">
        <p class="text-primary-dark text-[22px] font-semibold">
            {{ $t("global.error_page_title") }}
        </p>
        <p class="error_page_subtitle text-third-gray text-lg font-normal">
            {{ $t("global.error_page_subtitle") }}
        </p>
        <Button buttonType="router" variant="_dark" v-slot="slotProps">
            <RouterLink to="/home" v-bind="slotProps">
                {{ $t("global.error_page_btn_title") }}
            </RouterLink>
        </Button>
    </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/atoms/Button.vue";
</script>

<style lang="scss"></style>
