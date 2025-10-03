<template>
    <p class="bio_text" v-html="formatTransferText($t('message.bio_text'))"></p>
    <p class="bio_text_mob">{{ $t("message.bio_text") }}</p>
</template>

<script setup>
import { formatTransferText } from "@/utils/formatters.js";
</script>

<style lang="scss">
.bio_text,
.bio_text_mob {
    width: 100%;
    font-size: 36px;
    font-weight: 600;
    color: $primary_dark;
    line-height: 44px;
}

.bio_text_mob {
    display: none;
}
</style>
