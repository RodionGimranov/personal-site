ы
<template>
    <main class="about_page_container">
        <div class="blocks_row block1">
            <AboutGallery />
            <div class="text_content_container">
                <div class="message_block">
                    <p class="message_title">New personal site 🎉</p>
                    <p class="message_text">
                        If you're reading this... thank you! Happy to have you here in my little
                        corner of the internet and I hope you're enjoying yourself.<br />
                        I have plenty more coming and hope you'll stick around ❤️
                    </p>
                </div>
                <span class="future_content_block">Here will be content</span>
            </div>
            <AboutMusicPlayer />
            <AboutMetadata />
            <AboutLogo3D />
        </div>
        <div class="blocks_row block2">
            <AboutTollStack />
            <AboutQuotes />
        </div>
    </main>
</template>

<script setup>
import AboutGallery from "../components/aboutPageComponents/AboutGallery.vue";
import AboutMusicPlayer from "../components/aboutPageComponents/AboutMusicPlayer.vue";
import AboutMetadata from "../components/aboutPageComponents/AboutMetadata.vue";
import AboutLogo3D from "../components/aboutPageComponents/AboutLogo3D.vue";
import AboutTollStack from "../components/aboutPageComponents/AboutTollStack.vue";
import AboutQuotes from "../components/aboutPageComponents/AboutQuotes.vue";
</script>

<style lang="scss">
.about_page_container {
    max-width: 1200px;
    margin-top: 20vh;
    margin-bottom: 150px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}

.blocks_row {
    width: 1018px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}

.block1 {
    flex-wrap: wrap;
}

.block1 > :nth-child(1) {
    order: 1;
}

.block1 > :nth-child(2) {
    order: 2;
}

.block1 > :nth-child(3) {
    order: 3;
}

.block1 > :nth-child(4) {
    order: 4;
}

.block1 > :nth-child(5) {
    order: 5;
}

.text_content_container {
    width: 326px;
    height: 326px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}

.message_block {
    width: 100%;
    height: 100%;

    padding: 20px;
    border-radius: 30px;
    background: $block_bg_color;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.message_title {
    font-size: 20px;
    font-weight: 500;
    color: $primary_white_color;
}

.message_text {
    font-size: 17px;
    font-weight: 400;
    color: $text_gray_color;
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
    color: #949494;
}
</style>
