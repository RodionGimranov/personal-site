<template>
    <div class="mt-37.5! flex flex-col justify-center items-center gap-3 w-full">
        <p class="text-[22px] font-semibold text-primary-dark">
            {{ $t("global.error_page_title") }}
        </p>
        <p class="error_page_subtitle text-[18px] font-normal text-third-gray">
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
