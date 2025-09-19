<template>
    <div
        class="empty_card_container common_bento_card_style"
        :style="{ width: width + 'px', height: height + 'px' }"
    >
        <div class="empty_card_title">
            <p>{{ $t("message.empty_card_title") }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    width: {
        type: Number,
        default: 250,
    },
    height: {
        type: Number,
        default: 250,
    },
});
</script>

<style lang="scss">
.empty_card_container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.empty_card_title {
    width: 100%;
    height: 100%;
    border-radius: 22px;
    border: 2px dashed $secondary_gray;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 16px;
        font-weight: 400;
        color: $secondary_gray;
    }
}
</style>
