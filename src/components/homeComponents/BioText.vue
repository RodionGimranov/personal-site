<template>
    <p
        class="w-full text-[36px] font-semibold text-primary-dark leading-11!"
        v-html="formatTransferText($t('message.bio_text'))"
    ></p>
</template>

<script setup>
import { formatTransferText } from "@/utils/formatters.js";
</script>

<style lang="scss"></style>
