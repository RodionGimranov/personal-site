<template>
    <div class="code_editor_container">
        <div class="line_number">
            <p v-for="n in 8" :key="n">{{ n }}</p>
        </div>
        <div class="code_text_container">
            <p>
                <span class="kw_export">export</span>
                <span class="kw_const">const</span>
                <span class="variable">projectStats</span>
                <span class="punctuator">=</span>
                <span class="brace">{</span>
            </p>
            <p v-for="(value, key, index) in projectData" :key="key">
                <span class="key margin_left_34">{{ key }}:</span>
                <span class="literal"> {{ value }}<span class="punctuator">,</span></span>
            </p>
            <p><span class="brace">}</span><span class="punctuator">;</span></p>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

import {
    TOTAL_LINES_OF_CODE,
    TOTAL_FILE_COUNT,
    TOTAL_FOLDER_COUNT,
    PROJECT_SIZE_MB,
} from "@/constants/appConstants.js";

const projectData = computed(() => ({
    linesOfCode: TOTAL_LINES_OF_CODE,
    fileCount: TOTAL_FILE_COUNT,
    folderCount: TOTAL_FOLDER_COUNT,
    projectSizeMB: PROJECT_SIZE_MB,
}));
</script>

<style lang="scss">
.code_editor_container {
    width: 100%;
    padding: 0 0 0 20px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.line_number {
    cursor: default;
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    p {
        opacity: 40%;
        font-size: 15px;
        font-weight: 400;
        color: var(--primary-white);
        line-height: 20px;
        text-align: right;
        font-family: "Roboto Mono", monospace;
        font-optical-sizing: auto;
        font-style: normal;
    }
}

.code_text_container {
    width: 100%;
    height: 100%;
    cursor: text;
    padding: 10px 0 0 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    p {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 8px;

        font-size: 15px;
        font-weight: 400;
        color: var(--primary-white);
        line-height: 20px;
        font-family: "Source Code Pro", monospace;
        font-optical-sizing: auto;
        font-style: normal;

        &:last-child {
            gap: 0;
        }
    }
}

.kw_export {
    color: var(--syntax-keyword-export);
}

.kw_const {
    color: var(--syntax-keyword-const);
}

.variable {
    color: var(--syntax-variable);
}

.key {
    color: var(--syntax-property);
}

.literal {
    color: var(--syntax-literal);
}

.punctuator {
    color: var(--syntax-punctuation);
}

.brace {
    color: var(--syntax-brace);
}

.margin_left_34 {
    margin-left: 34px;
}
</style>
