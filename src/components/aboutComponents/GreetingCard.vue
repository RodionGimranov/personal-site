<template>
    <div class="greeting_card_container common_bento_card_style commom_card_style">
        <p v-html="formatTransferText($t('message.greeting_text'))"></p>
    </div>
</template>

<script setup>
import { formatTransferText } from "@/utils/formatters.js";
</script>

<style lang="scss">
.greeting_card_container {
    width: 520px;
    height: 250px;
    padding: 16px !important;

    p {
        font-size: 16px;
        font-weight: 400;
        color: var(--primary-dark);
    }
}
</style>
