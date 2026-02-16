<template>
    <div class="common_bento_card_style commom_card_style h-62.5 w-130 p-4!">
        <p
            class="text-primary-dark text-base font-normal"
            v-html="formatTransferText($t('about.greeting_text'))"
        ></p>
    </div>
</template>

<script setup lang="ts">
import { formatTransferText } from "@/utils/formatters";
</script>

<style lang="scss"></style>
