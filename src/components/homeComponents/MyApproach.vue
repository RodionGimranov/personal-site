<template>
    <div class="common_home_section_style">
        <p class="common_home_section_title">
            {{ $t("home.approach_home_section_title") }}
        </p>
        <div class="w-full overflow-hidden flex justify-center items-start flex-wrap gap-5">
            <div
                v-for="(item, index) in approachItems"
                :key="index"
                class="w-85 min-h-55.5 flex flex-col justify-between items-start gap-3 py-9! px-5.5! commom_card_style"
            >
                <SvgIcon :name="item.icon" :width="24" :height="24" />
                <div class="flex flex-col justify-start items-start gap-2">
                    <p class="text-[22px] font-medium text-primary-dark">
                        {{ $t(item.title) }}
                    </p>

                    <p
                        class="text-[16px] font-normal text-primary-dark"
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
