<template>
    <div class="error_page_container">
        <p class="error_page_title">{{ $t("message.error_page_title") }}</p>
        <p class="error_page_subtitle">{{ $t("message.error_page_subtitle") }}</p>
        <RouterLink to="/home">
            <Button as="span" variant="_dark" :buttonText="$t('message.error_page_btn_title')" />
        </RouterLink>
    </div>
</template>

<script setup>
import Button from "@/components/ui/atoms/Button.vue";
</script>

<style lang="scss">
.error_page_container {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.error_page_title {
    font-size: 22px;
    font-weight: 600;
    color: var(--primary-dark);
}

.error_page_subtitle {
    font-size: 18px;
    font-weight: 400;
    color: var(--third-gray);
}
</style>
