<template>
    <div class="code_text_container">
        <p class="code_text comment">// Here are the project metadata</p>

        <p class="code_text line_1">
            export
            <span :style="{ color: '#569CD6' }">const</span>
            <span :style="{ color: '#4FC1FF' }">projectMetaData</span>
            <span :style="{ color: '#D4D4D4' }">=</span>
            <span :style="{ color: '#FFD700' }">[</span>
        </p>

        <p class="code_text line_2">
            {
            <span :style="{ color: '#9CDCFE' }">number_of_lines_code:</span>
            <span :style="{ color: '#CE9178' }">4470"</span>
            <span>}</span>
            <span :style="{ color: '#D4D4D4' }">,</span>
        </p>

        <p class="code_text line_3">
            {
            <span :style="{ color: '#9CDCFE' }">number_of_folders:</span>
            <span :style="{ color: '#CE9178' }">"27"</span>
            <span clsss="">}</span>
            <span :style="{ color: '#D4D4D4' }">,</span>
        </p>

        <p class="code_text line_4">
            {
            <span :style="{ color: '#9CDCFE' }">number_of_files:</span>
            <span :style="{ color: '#CE9178' }">"109"</span>
            <span clsss="">}</span>
            <span :style="{ color: '#D4D4D4' }">,</span>
        </p>

        <p class="code_text line_5">
            {
            <span :style="{ color: '#9CDCFE' }">project_size:</span>
            <span :style="{ color: '#CE9178' }">"48,01 MB"</span>
            <span clsss="">}</span>
            <span :style="{ color: '#D4D4D4' }">,</span>
        </p>

        <p class="code_text line_6">
            ]
            <span :style="{ color: '#D4D4D4' }">;</span>
        </p>
    </div>
</template>

<script setup></script>

<style lang="scss">
.code_text_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.code_text {
    font-family: "Menlo";
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    word-wrap: break-word;
    color: $primary_white;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.comment {
    color: $comment_code;
}

.line_1 {
    color: $pink_code_text;
    gap: 10px;
}

.line_2,
.line_3,
.line_4,
.line_5 {
    display: flex;
    color: $pink_code_text;
    margin-left: 10px;

    & > *:not(:last-child) {
        margin-left: 10px;
    }
}

.line_6 {
    color: $yellow_code_text;
}
</style>
