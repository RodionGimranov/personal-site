<template>
    <div class="tool_block_container">
        <p class="block_title tool_title_margrin_left">Tool Stack</p>
        <div class="tool_icon_container">
            <div class="tool_icon_row move_left">
                <img
                    class="tool_icon"
                    v-for="(image, index) in duplicatedToolImages"
                    :key="`left-${index}`"
                    :src="image"
                    alt="Tool icon"
                />
            </div>
            <div class="tool_icon_row move_right">
                <img
                    class="tool_icon"
                    v-for="(image, index) in duplicatedToolImages"
                    :key="`right-${index}`"
                    :src="image"
                    alt="Tool icon"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const toolImages = [
    new URL("../../assets/images/svg/toolStack-icons/Figma-icon.svg", import.meta.url).href,
    new URL("../../assets/images/svg/toolStack-icons/GitHub-icon.svg", import.meta.url).href,
    new URL("../../assets/images/svg/toolStack-icons/VSCode-icon.svg", import.meta.url).href,
    new URL("../../assets/images/svg/toolStack-icons/Notion-icon.svg", import.meta.url).href,
    new URL("../../assets/images/svg/toolStack-icons/Chrome-icon.svg", import.meta.url).href,
    new URL("../../assets/images/svg/toolStack-icons/ChatGPT-icon.svg", import.meta.url).href,
];

const duplicatedToolImages = [...toolImages, ...toolImages, ...toolImages];
</script>

<style lang="scss">
.tool_block_container {
    width: 100%;
    height: 247px;

    background: $secondary_bg;
    border-radius: 30px;
    overflow: hidden;
    padding: 20px 0px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.tool_title_margrin_left {
    margin-left: 20px;
}

.tool_icon_container {
    width: 100%;
    mask: linear-gradient(90deg, transparent, black 20%, black 80%, transparent);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.tool_icon_row {
    display: flex;
    align-items: center;
    gap: 20px;
}

.move_left {
    flex-direction: row-reverse;
    transform: translateX(35%);
    animation: scroll-left 45s linear infinite;
}

.move_right {
    flex-direction: row;
    transform: translateX(-35%);
    animation: scroll-right 45s linear infinite;
}

@keyframes scroll-left {
    0% {
        transform: translateX(35%);
    }
    100% {
        transform: translateX(-35%);
    }
}

@keyframes scroll-right {
    0% {
        transform: translateX(-35%);
    }
    100% {
        transform: translateX(35%);
    }
}

.tool_icon {
    width: 70px;
    height: 70px;
}
</style>
