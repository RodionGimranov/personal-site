<template>
    <div class="w-130 h-62.5 p-4! common_bento_card_style commom_card_style">
        <p
            class="text-[16px] font-normal text-primary-dark"
            v-html="formatTransferText($t('message.greeting_text'))"
        ></p>
    </div>
</template>

<script setup>
import { formatTransferText } from "@/utils/formatters.js";
</script>

<style lang="scss"></style>
