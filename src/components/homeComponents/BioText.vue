<template>
    <p class="bio_text" v-html="formatTransferText($t('message.bio_text'))"></p>
</template>

<script setup>
import { formatTransferText } from "@/utils/formatters.js";
</script>

<style lang="scss">
.bio_text {
    width: 100%;
    font-size: 36px;
    font-weight: 600;
    color: var(--primary-dark);
    line-height: 44px;
}
</style>
