<template>
    <div class="text_content_container">
        <div class="message_block">
            <p class="message_title">New personal site 🎉</p>
            <p class="message_text">
                If you're reading this... thank you! I'm glad you're here in my little corner of the
                internet. I have plenty more coming up, and I hope you're enjoying it here. ❤️
            </p>
        </div>
        <span class="future_content_block">Here will be content</span>
    </div>
</template>

<script setup></script>

<style lang="scss">
.text_content_container {
    width: 326px;
    height: 326px;
    gap: 20px;
}

.text_content_container,
.message_block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.message_block {
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 30px;
    background: $secondary_bg;
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

.future_content_block {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 2px #2f2f2f dashed;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: 400;
    color: $third_gray;
}
</style>
