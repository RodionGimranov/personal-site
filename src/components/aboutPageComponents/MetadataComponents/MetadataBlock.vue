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
                <svg class="lang_icon" width="16" height="16">
                    <use xlink:href="/images/svg/sprite.svg#small-js-icon"></use>
                </svg>
                <p class="file_name menlo_font">projectData.js</p>
                <svg class="close_file_icon" width="10" height="10">
                    <use xlink:href="/images/svg/sprite.svg#close-file-icon"></use>
                </svg>
            </div>
            <div class="toolbar">
                <button v-for="(icon, index) in toolbarIcons" :key="index" class="toolbar_btn">
                    <svg class="toolbar_icon" :width="icon.width" :height="icon.height">
                        <use :xlink:href="icon.src"></use>
                    </svg>
                </button>
            </div>
        </div>
        <div class="editor_area">
            <div class="line_breakpoint_wrapper">
                <div class="сode_breakpoint_container">
                    <span class="code_breakpoint" v-for="breakpoint in 7"></span>
                </div>
                <p class="line_number menlo_font">1<br />2<br />3<br />4<br />5<br />6<br />7</p>
            </div>
            <CodeTextContainer />
        </div>
    </div>
</template>

<script setup>
import CodeTextContainer from "./CodeTextContainer.vue";

const colors = ["#ED6A5E", "#F5BD50", "#61C454"];

const toolbarIcons = [
    {
        src: "/personal-site/images/svg/sprite.svg#source-control-icon",
        width: 16,
        height: 17,
    },
    {
        src: "/personal-site/images/svg/sprite.svg#split-editor-icon",
        width: 16,
        height: 16,
    },
    {
        src: "/personal-site/images/svg/sprite.svg#more-actions-icon",
        width: 16,
        height: 16,
    },
];
</script>

<style lang="scss">
.code_editor {
    width: 100%;
    height: 262px;
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
    background: $third_bg;
    padding: 15px 20px 10px 20px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.menu_btn {
    width: 14px;
    height: 14px;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: $line_number;
    text-align: right;
}
</style>
