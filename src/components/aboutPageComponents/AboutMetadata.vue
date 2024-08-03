<template>
    <div class="code_editor">
        <div class="menu_bar">
            <span class="close_btn menu_btn"></span>
            <span class="minimize_btn menu_btn"></span>
            <span class="fullscreen_btn menu_btn"></span>
        </div>
        <div class="title_bar">
            <div class="file_tab">
                <img class="lang_icon" src="../../assets/images/svg/metadata-icons/small-js-icon.svg" alt="JavaScript icon">
                <p class="file_name">projectData.js</p>
                <img class="close_file_icon" src="../../assets/images/svg/metadata-icons/close-file-icon.svg" alt="Cross icon">
            </div>
            <div class="toolbar">
                <button class="toolbar_btn">
                    <img class="toolbar_icon" src="../../assets/images/svg/metadata-icons/source-control-icon.svg" alt="Toollbat icon">
                </button>
                <button class="toolbar_btn">
                    <img class="toolbar_icon" src="../../assets/images/svg/metadata-icons/split-editor-icon.svg" alt="Toollbat icon">
                </button>
                <button class="toolbar_btn">
                    <img class="toolbar_icon" src="../../assets/images/svg/metadata-icons/more-actions-icon.svg" alt="Toollbat icon">
                </button>
            </div>
        </div>
        <div class="editor_area">
            <p class="line_number">1<br>2<br>3<br>4<br>5<br>6<br>7</p>
            <div class="code_text_container">
                <p class="code_text comment">// Here are the project metadata</p>
                <p class="code_text line_1">export
                    <p :style="{ color: '#569CD6'}">const</p>
                    <p :style="{ color: '#4FC1FF'}">projectMetaData</p>
                    <p :style="{ color: '#D4D4D4'}">=</p>
                    <p :style="{ color: '#FFD700'}">[</p>
                </p>
                <p class="code_text line_2">{
                    <p :style="{ color: '#9CDCFE'}">number_of_lines_code:</p>
                    <p :style="{ color: '#CE9178'}">"4099"</p>
                    <p>}</p>
                    <p :style="{ color: '#D4D4D4'}">,</p>
                </p>
                <p class="code_text line_3">{
                    <p :style="{ color: '#9CDCFE'}">number_of_folders:</p>
                    <p :style="{ color: '#CE9178'}">"503"</p>
                    <p clsss="">}</p>
                    <p :style="{ color: '#D4D4D4'}">,</p>
                </p>
                <p class="code_text line_4">{
                    <p :style="{ color: '#9CDCFE'}">number_of_files:</p>
                    <p :style="{ color: '#CE9178'}">"2858"</p>
                    <p clsss="">}</p>
                    <p :style="{ color: '#D4D4D4'}">,</p>
                </p>
                <p class="code_text line_5">{
                    <p :style="{ color: '#9CDCFE'}">project_size:</p>
                    <p :style="{ color: '#CE9178'}">"327 MB"</p>
                    <p clsss="">}</p>
                    <p :style="{ color: '#D4D4D4'}">,</p>
                </p>
                <p class="code_text line_6">]
                    <p :style="{ color: '#D4D4D4'}">;</p>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss">
@font-face {
    font-family: 'Menlo';
    font-weight: 400;
    font-style: normal;
    src: url('../../assets/fonts/Menlo-Regular.ttf') format('ttf');
}

.code_editor {
    width: 748px;
    height: 250px;

    cursor: text;
    overflow: hidden;
    border-radius: 30px;
    background: $block_bg_color; 

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.menu_bar {
    width: 100%;
    cursor: default;
    padding: 15px 20px 10px 20px;
    background: $menu_bar_bg_color;

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

.close_btn {
    background: $mac_close_btn_color;
}

.minimize_btn {
    background: $mac_minimize_btn_color;
}

.fullscreen_btn {
    background: $max_fullscreen_btn_color;
}

.title_bar {
    width: 100%;
    cursor: pointer;
    padding: 0px 20px 0px 0px;
    background: $title_bar_bg_color;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.file_tab {
    height: 35px;
    background: $block_bg_color;
    padding: 0px 10px 0px 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
}

.file_name {
    font-family: 'Menlo';
    font-size: 12px;
    font-weight: 400;
    color: $primary_white_color;
}

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
        background: $toolbar_hover_bg_color;
    }
}

.editor_area {
    width: 100%;
    height: 100%;
    padding: 10px 20px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.line_number {
    font-family: 'Menlo';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    word-wrap: break-word;
    color: $line_number_color;
    text-align: right;
}

.code_text_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.code_text {
    font-family: 'Menlo';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    word-wrap: break-word;
    color: $primary_white_color; 

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.comment {
    color: $comment_code_color;
}

.line_1 {
    color: $pink_code_text_color;
    gap: 10px;
}

.line_2, .line_3, .line_4, .line_5 {
    display: flex;
    color: $pink_code_text_color;
    margin-left: 10px;

    & > *:not(:last-child) {
        margin-left: 10px;
    }
}

.line_6 {
    color: $yellow_code_text_color;
}
</style>
