<template>
    <div class="home_intro_text_container">
        <p class="home_intro_text_animation">I enjoy creating</p>
        <div class="color_text">
            <p class="web_title letter_W courgette_font">w</p>
            <p class="web_title letter_e courgette_font">e</p>
            <p class="web_title letter_b courgette_font">b</p>
            <p ref="typingText" class="typing_text"></p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

import { IntroTextAnim } from "../../libs/gsap-js/IntroTextAnim.js";

const typingText = ref(null);

const typingWords = [
    "pages.",
    "design.",
    "graphics.",
    "interfaces.",
    "UX/UI.",
    "elements.",
    "styles.",
    "content.",
    "App.",
    "components.",
    "animations.",
    "layouts.",
];

let wordTypeInterval;

function setTyper(element, typingWords) {
    const LETTER_TYPE_DELAY = 75;
    const WORD_STAY_DELAY = 2000;
    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;

    let direction = DIRECTION_FORWARDS;
    let wordIndex = 7;
    let letterIndex = 0;

    function startTyping() {
        if (wordTypeInterval) clearInterval(wordTypeInterval);
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    }

    function typeLetter() {
        const word = typingWords[wordIndex];

        if (direction === DIRECTION_FORWARDS) {
            letterIndex++;

            if (letterIndex === word.length) {
                direction = DIRECTION_BACKWARDS;
                clearInterval(wordTypeInterval);
                setTimeout(startTyping, WORD_STAY_DELAY);
            }
        } else if (direction === DIRECTION_BACKWARDS) {
            letterIndex--;

            if (letterIndex === 0) {
                nextWord();
            }
        }

        const textToType = word.substring(0, letterIndex);
        element.textContent = textToType;
    }

    function nextWord() {
        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex === typingWords.length) {
            wordIndex = 0;
        }
    }
    startTyping();
}

onMounted(() => {
    IntroTextAnim();

    nextTick(() => {
        setTyper(typingText.value, typingWords);
    });
});

onBeforeUnmount(() => {
    if (wordTypeInterval) clearInterval(wordTypeInterval);
});
</script>

<style lang="scss">
.home_intro_text_container {
    overflow: hidden;
}

.home_intro_text_animation,
.typing_text {
    font-size: 100px;
    font-weight: 500;
    color: $primary_white;
    text-align: center;
    line-height: normal;
}

.color_text {
    display: flex;
    justify-content: center;
    align-items: center;
}

.web_title {
    font-size: 120px;
}

.letter_W {
    color: $letter_W;
}

.letter_e {
    color: $letter_e;
}

.letter_b {
    color: $letter_b;
    margin-right: 30px;
}

.typing_text::after {
    content: "|";
    animation: blink ease 1s infinite;
}

@keyframes blink {
    100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>
