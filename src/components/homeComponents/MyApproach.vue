<template>
    <div class="my_apporoach_section common_home_section_style">
        <p class="common_home_section_title">{{ $t("message.approach_home_section_title") }}</p>
        <div class="my_apporoach_card_container">
            <div class="my_apporoach_card" v-for="(item, index) in apporoach_item" :key="index">
                <p class="my_apporoach_title">{{ $t(item.title) }}</p>
                <p class="my_apporoach_subtitle" v-html="formatTransferText($t(item.subtitle))"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { formatTransferText } from "@/utils/formatters.js";

const apporoach_item = [
    {
        title: "message.clean_code_title",
        subtitle: "message.clean_code_subtitle",
    },
    {
        title: "message.ux_ui_attention_title",
        subtitle: "message.ux_ui_attention_subtitle",
    },
    {
        title: "message.learning_title",
        subtitle: "message.learning_subtitle",
    },
];
</script>

<style lang="scss">
.my_apporoach_card_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.my_apporoach_card {
    width: 322px;
    height: 256px;
    padding: 42px 22px;
    border-radius: 30px;
    background: $fourth_gray;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.my_apporoach_title {
    font-size: 24px;
    font-weight: 500;
    color: $primary_dark;
}

.my_apporoach_subtitle {
    font-size: 16px;
    font-weight: 400;
    color: $primary_dark;
}
</style>
