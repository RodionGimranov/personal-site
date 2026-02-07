<template>
    <div
        class="flex justify-center items-center common_bento_card_style commom_card_style"
        :style="{ width, height }"
    >
        <ShinyText :text="$t('about.empty_card_title')" />
    </div>
</template>

<script setup lang="ts">
import ShinyText from "@/components/vue-bits/TextAnimation/ShinyText.vue";

type Props = {
    width?: string;
    height?: string;
};

const props = withDefaults(defineProps<Props>(), {
    width: "250px",
    height: "250px",
});

const { width, height } = props;
</script>

<style lang="scss"></style>
