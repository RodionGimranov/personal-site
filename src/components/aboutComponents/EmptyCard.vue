<template>
    <div class="empty_card_container common_bento_card_style" :style="{ width, height }">
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

<style lang="scss">
.empty_card_container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
