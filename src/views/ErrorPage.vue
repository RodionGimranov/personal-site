<template>
    <div class="mt-37.5! flex flex-col justify-center items-center gap-3">
        <p class="text-[22px] font-semibold text-primary-dark">
            {{ $t("message.error_page_title") }}
        </p>
        <p class="error_page_subtitle text-[18px] font-normal text-third-gray">
            {{ $t("message.error_page_subtitle") }}
        </p>
        <RouterLink to="/home">
            <Button as="span" variant="_dark" :buttonText="$t('message.error_page_btn_title')" />
        </RouterLink>
    </div>
</template>

<script setup>
import Button from "@/components/ui/atoms/Button.vue";
</script>

<style lang="scss"></style>
