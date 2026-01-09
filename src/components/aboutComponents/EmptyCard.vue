<template>
    <div
        class="flex justify-center items-center common_bento_card_style commom_card_style"
        :style="{ width, height }"
    >
        <ShinyText :text="$t('message.empty_card_title')" />
    </div>
</template>

<script setup>
import ShinyText from "@/components/vue-bits/TextAnimation/ShinyText.vue";

defineProps({
    width: { type: String, default: "250px" },
    height: { type: String, default: "250px" },
});
</script>

<style lang="scss"></style>
