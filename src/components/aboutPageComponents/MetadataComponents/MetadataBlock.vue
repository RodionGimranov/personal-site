<template>
    <div class="code_editor">
        <div class="menu_bar">
            <span
                v-for="(color, index) in colors"
                :key="index"
                class="menu_btn"
                :style="{ background: color }"
            >
            </span>
        </div>
        <div class="title_bar">
            <div class="file_tab">
                <img class="lang_icon" :src="js_lang_icon" alt="JavaScript icon" />
                <p class="file_name">projectData.js</p>
                <img class="close_file_icon" :src="close_file_icon" alt="Cross icon" />
            </div>
            <div class="toolbar">
                <button v-for="(icon, index) in toolbarIcons" :key="index" class="toolbar_btn">
                    <img class="toolbar_icon" :src="icon" alt="Toolbar icon" />
                </button>
            </div>
        </div>
        <div class="editor_area">
            <div class="line_breakpoint_wrapper">
                <div class="сode_breakpoint_container">
                    <span class="code_breakpoint" v-for="breakpoint in 7"></span>
                </div>
                <p class="line_number">1<br />2<br />3<br />4<br />5<br />6<br />7</p>
            </div>
            <CodeTextContainer />
        </div>
    </div>
</template>

<script setup>
import CodeTextContainer from "./CodeTextContainer.vue";

import js_lang_icon from "../../../assets/images/svg/metadata-icons/small-js-icon.svg";
import close_file_icon from "../../../assets/images/svg/metadata-icons/close-file-icon.svg";

const colors = ["#ED6A5E", "#F5BD50", "#61C454"];

const toolbarIcons = [
    new URL("../../../assets/images/svg/metadata-icons/source-control-icon.svg", import.meta.url)
        .href,
    new URL("../../../assets/images/svg/metadata-icons/split-editor-icon.svg", import.meta.url)
        .href,
    new URL("../../../assets/images/svg/metadata-icons/more-actions-icon.svg", import.meta.url)
        .href,
];
</script>

<style lang="scss">
@font-face {
    font-family: "Menlo";
    font-weight: 400;
    font-style: normal;
    src: url("../../assets/fonts/Menlo-Regular.ttf") format("ttf");
}

.code_editor {
    // width: 672px;
    width: 100%;
    height: 250px;
    cursor: text;
    border-radius: 30px;
    background: $secondary_bg;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.menu_bar {
    width: 100%;
    cursor: default;
    padding: 15px 20px 10px 20px;
    background: $third_bg;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.menu_btn {
    width: 14px;
    height: 14px;
    border-radius: 100px;
}

.title_bar {
    width: 100%;
    cursor: pointer;
    padding: 0px 20px 0px 0px;
    background: $title_bar_bg;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.file_tab {
    height: 35px;
    background: $secondary_bg;
    padding: 0px 10px 0px 20px;
}

.file_name {
    font-family: "Menlo";
    font-size: 12px;
    font-weight: 400;
    color: $primary_white;
}

.file_tab,
.toolbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
}

.toolbar_btn {
    width: 22px;
    height: 22px;
    transition: 0.1s;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: $toolbar_hover_bg;
    }
}

.editor_area {
    width: 100%;
    height: 100%;
    padding: 10px 5px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.line_breakpoint_wrapper {
    cursor: default;
    display: flex;
    gap: 5px;
}

.сode_breakpoint_container {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 11px;
}

.code_breakpoint {
    width: 10px;
    height: 10px;
    opacity: 0;
    cursor: pointer;
    transition: 0.1s;
    border-radius: 100px;
    background: $third_red;

    &:hover {
        opacity: 1;
    }
}

.line_number {
    cursor: default;
    font-family: "Menlo";
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: $line_number;
    text-align: right;
}
</style>
