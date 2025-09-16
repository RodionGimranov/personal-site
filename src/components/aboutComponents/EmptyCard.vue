<template>
    <div class="empty_card_container commom_card_style">
        <div class="empty_card_title">
            <p>{{ $t("message.empty_card_title") }}</p>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss">
.empty_card_container {
    width: 520px;
    height: 250px;
    padding: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.empty_card_title {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    border: 1px dashed $secondary_gray;

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
