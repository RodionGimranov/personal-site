<template>
    <div class="code_text_container">
        <p class="code_text comment_line">// Here are the project metadata</p>
        <p class="code_text line_1">
            export
            <span :style="{ color: '#569CD6' }">const</span>
            <span :style="{ color: '#4FC1FF' }">projectMetaData</span>
            <span :style="{ color: '#D4D4D4' }">=</span>
            <span :style="{ color: '#FFD700' }">[</span>
        </p>
        <p v-for="(line, index) in codeLines" :key="index" class="code_text code_lines">
            {
            <span :style="{ color: '#9CDCFE' }">{{ line.key }}</span>
            <span :style="{ color: '#CE9178' }">{{ line.value }}</span>
            <span>}</span>
            <span :style="{ color: '#D4D4D4' }">,</span>
        </p>
        <p class="code_text line_6">
            ]
            <span :style="{ color: '#D4D4D4' }">;</span>
        </p>
    </div>
</template>

<script setup>
const codeLines = [
    { key: "number_of_lines_code:", value: "3788" },
    { key: "number_of_folders:", value: "31" },
    { key: "number_of_files:", value: "146" },
    { key: "project_size:", value: "104,5 MB" },
];
</script>

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
    color: $primary_white;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.comment_line {
    color: $comment_code;
}

.line_1 {
    color: $pink_code_text;
    gap: 10px;
}

.code_lines {
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
