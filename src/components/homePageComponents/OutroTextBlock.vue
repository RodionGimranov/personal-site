<template>
    <div class="outro_text_container">
        <p class="outro_text"><span class="word_change">Frontend</span> is more than</p>
        <p class="outro_text">
            just changing
            <span
                class="button_color"
                :style="{ background: buttonBackground, borderRadius: buttonBorderRadius }"
            >
                button
            </span>
            color
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue";

const buttonBackground = ref("#FFFFFF");
const buttonBorderRadius = ref("0px");

const colors = [
    "#E34C26",
    "#2965F1",
    "#C4538C",
    "#F1E05A",
    "#3DD68C",
    "#FF5F4C",
    "#82D1BE",
    "#646CFF",
    "#F3E5AB",
];

const borderRadius = [
    "0px 35px 35px 35px",
    "5px",
    "30px",
    "10px",
    "35px 0px",
    "0px 35px",
    "50px",
    "15px",
    "0px",
];

let index = 0;
setInterval(() => {
    buttonBackground.value = colors[index % colors.length];
    buttonBorderRadius.value = borderRadius[index % borderRadius.length];
    index++;
}, 500);
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Courgette&display=swap");

.outro_text_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.outro_text {
    font-size: 70px;
    font-weight: 500;
    color: $primary_white_color;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
}

.word_change {
    font-size: 70px;
    font-weight: 400;
    font-family: "Courgette", cursive;
    font-style: normal;
    line-height: normal;
}

.button_color {
    transition: 0.2s;
    padding: 0px 24px;

    font-size: 55px;
    color: $primary_black_color;
}
</style>
