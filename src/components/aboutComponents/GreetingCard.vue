<template>
    <div class="greeting_card_container commom_card_style">
        <p v-for="key in greetingKeys" :key="key">
            {{ $t(`message.${key}`) }}
        </p>
    </div>
</template>

<script setup>
const greetingKeys = ["greeting_text_1", "greeting_text_2", "greeting_text_3", "greeting_text_4"];
</script>

<style lang="scss">
.greeting_card_container {
    width: 368px;
    height: 326px;
    padding: 32px 16px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 14px;

    p {
        font-size: 18px;
        font-weight: 500;
        color: $primary_dark;
    }
}
</style>
