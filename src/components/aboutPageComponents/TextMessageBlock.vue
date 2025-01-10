<template>
    <div class="message_block">
        <p class="message_title">New personal site 🎉</p>
        <p class="message_text">
            If you're reading this... thank you! I'm glad you're here in my little corner of the
            internet. I have plenty more coming up, and I hope you're enjoying it here. ❤️
        </p>
    </div>
</template>

<script setup></script>

<style lang="scss">
.message_block {
    width: 326px;
    padding: 20px;
    border-radius: 40px;
    background: $secondary_bg;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.message_title {
    font-size: 20px;
    font-weight: 500;
    color: $primary_white;
}

.message_text {
    font-size: 17px;
    font-weight: 400;
    color: $third_gray;
}
</style>
