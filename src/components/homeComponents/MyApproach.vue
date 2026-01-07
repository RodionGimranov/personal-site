<template>
    <div class="my_apporoach_section common_home_section_style">
        <p class="common_home_section_title">{{ $t("message.approach_home_section_title") }}</p>
        <div class="my_apporoach_card_container">
            <div
                class="my_apporoach_card commom_card_style"
                v-for="(item, index) in approachItems"
                :key="index"
            >
                <SvgIcon :name="item.icon" :width="24" :height="24" />
                <div class="my_apporoach_texts">
                    <p class="my_apporoach_title">{{ $t(item.title) }}</p>
                    <p
                        class="my_apporoach_subtitle"
                        v-html="formatTransferText($t(item.subtitle))"
                    ></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { formatTransferText } from "@/utils/formatters.js";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

const approachItems = [
    {
        icon: "clean-code-icon",
        title: "message.clean_code_title",
        subtitle: "message.clean_code_subtitle",
    },
    {
        icon: "ux-ui-attention-icon",
        title: "message.ux_ui_attention_title",
        subtitle: "message.ux_ui_attention_subtitle",
    },
    {
        icon: "learning-icon",
        title: "message.learning_title",
        subtitle: "message.learning_subtitle",
    },
];
</script>

<style lang="scss">
.my_apporoach_card_container {
    width: 100%;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
}

.my_apporoach_card {
    width: 340px;
    min-height: 222px;
    padding: 36px 22px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
}

.my_apporoach_texts {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
}

.my_apporoach_title {
    font-size: 22px;
    font-weight: 500;
    color: var(--primary-dark);
}

.my_apporoach_subtitle {
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-dark);
}
</style>
