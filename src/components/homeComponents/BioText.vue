<template>
    <p class="bio_text" v-html="$filters.formatText($t('message.bio_text'))"></p>
</template>

<script setup></script>

<style lang="scss">
.bio_text {
    width: 100%;
    font-size: 36px;
    font-weight: 600;
    color: $primary_dark;
    line-height: 44px;
}
</style>
