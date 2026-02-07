<template>
    <div class="w-130 h-62.5 p-4! common_bento_card_style commom_card_style">
        <p
            class="text-base font-normal text-primary-dark"
            v-html="formatTransferText($t('about.greeting_text'))"
        ></p>
    </div>
</template>

<script setup lang="ts">
import { formatTransferText } from "@/utils/formatters";
</script>

<style lang="scss"></style>
