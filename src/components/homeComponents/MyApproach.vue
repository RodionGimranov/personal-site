<template>
    <div class="my_apporoach_section common_home_section_style">
        <p class="common_home_section_title">{{ $t("message.approach_home_section_title") }}</p>
        <div class="w-full overflow-hidden flex justify-center items-start flex-wrap gap-5">
            <div
                class="w-85 min-h-55.5 flex flex-col justify-between items-start gap-3 py-9! px-5.5! commom_card_style"
                v-for="(item, index) in approachItems"
                :key="index"
            >
                <SvgIcon :name="item.icon" :width="24" :height="24" />
                <div class="flex flex-col justify-start items-start gap-2">
                    <p class="text-[22px] font-medium text-primary-dark">
                        {{ $t(item.title) }}
                    </p>
                    <p
                        class="text-[16px] font-normal text-primary-dark"
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

<style lang="scss"></style>
