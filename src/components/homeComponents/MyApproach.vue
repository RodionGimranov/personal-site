<template>
    <div class="common_home_section_style">
        <p class="common_home_section_title">
            {{ $t("home.approach_home_section_title") }}
        </p>
        <div class="flex w-full flex-wrap items-start justify-center gap-5 overflow-hidden">
            <div
                v-for="(item, index) in approachItems"
                :key="index"
                class="commom_card_style flex min-h-55.5 w-85 flex-col items-start justify-between gap-3 px-5.5! py-9!"
            >
                <SvgIcon :name="item.icon" :width="24" :height="24" />
                <div class="flex flex-col items-start justify-start gap-2">
                    <p class="text-primary-dark text-[22px] font-medium">
                        {{ $t(item.title) }}
                    </p>
                    <p
                        class="text-primary-dark text-base font-normal"
                        v-html="formatTransferText($t(item.subtitle))"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { formatTransferText } from "@/utils/formatters";
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

type ApproachItem = {
    icon: string;
    title: string;
    subtitle: string;
};

const approachItems: ApproachItem[] = [
    {
        icon: "clean-code-icon",
        title: "home.clean_code_title",
        subtitle: "home.clean_code_subtitle",
    },
    {
        icon: "ux-ui-attention-icon",
        title: "home.ux_ui_attention_title",
        subtitle: "home.ux_ui_attention_subtitle",
    },
    {
        icon: "learning-icon",
        title: "home.learning_title",
        subtitle: "home.learning_subtitle",
    },
];
</script>

<style lang="scss"></style>
