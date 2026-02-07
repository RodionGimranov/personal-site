<template>
    <p
        class="w-full text-[36px] font-semibold text-primary-dark leading-11!"
        v-html="formatTransferText($t('home.bio_text'))"
    ></p>
</template>

<script setup lang="ts">
import { formatTransferText } from "@/utils/formatters";
</script>

<style lang="scss"></style>
