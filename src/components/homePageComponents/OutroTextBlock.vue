<template>
    <div class="outro_text_container">
        <p class="outro_text">
            <span class="word_change courgette_font">Frontend</span> is more than
        </p>
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

const borderRadius = ["35px", "5px", "30px", "10px", "50px", "15px", "0px"];

let index = 0;
setInterval(() => {
    buttonBackground.value = colors[index % colors.length];
    buttonBorderRadius.value = borderRadius[index % borderRadius.length];
    index++;
}, 800);
</script>

<style lang="scss">
.outro_text_container {
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.outro_text {
    font-size: 70px;
    font-weight: 500;
    color: $primary_white;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
}

.word_change {
    font-size: 70px;
}

.button_color {
    cursor: pointer;
    transition: 0.4s;
    padding: 0px 24px;

    font-size: 55px;
    color: $primary_black;
}
</style>
