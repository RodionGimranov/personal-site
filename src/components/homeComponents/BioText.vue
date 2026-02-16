<template>
    <p
        class="text-primary-dark w-full text-4xl leading-11! font-semibold"
        v-html="formatTransferText($t('home.bio_text'))"
    ></p>
</template>

<script setup lang="ts">
import { formatTransferText } from "@/utils/formatters";
</script>

<style lang="scss"></style>
