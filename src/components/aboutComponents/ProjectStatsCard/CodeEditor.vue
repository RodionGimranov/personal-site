<template>
    <div class="flex w-full items-start justify-start gap-2.5 pl-5!">
        <div class="line_number mt-2.5! flex cursor-default flex-col items-start justify-start">
            <p v-for="n in 8" :key="n">{{ n }}</p>
        </div>
        <div
            class="code_text_container flex h-full w-full cursor-text flex-col items-start justify-start pt-2.5!"
        >
            <p>
                <span class="text-syntax-keyword-export">export</span>
                <span class="text-syntax-keyword-const">const</span>
                <span class="text-syntax-variable">projectStats</span>
                <span class="text-syntax-punctuation">=</span>
                <span class="text-syntax-brace">{</span>
            </p>
            <p v-for="(value, key) in projectData" :key="key">
                <span class="text-syntax-property ml-8.5!">{{ key }}:</span>
                <span class="text-syntax-literal">
                    {{ value }}<span class="text-syntax-punctuation!">,</span></span
                >
            </p>
            <p>
                <span class="text-syntax-brace">}</span
                ><span class="text-syntax-punctuation">;</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import {
    TOTAL_LINES_OF_CODE,
    TOTAL_FILE_COUNT,
    TOTAL_FOLDER_COUNT,
    PROJECT_SIZE_MB,
} from "@/constants/appConstants";

interface ProjectStats {
    linesOfCode: number;
    fileCount: number;
    folderCount: number;
    projectSizeMB: number;
}

const projectData = computed<ProjectStats>(() => ({
    linesOfCode: TOTAL_LINES_OF_CODE,
    fileCount: TOTAL_FILE_COUNT,
    folderCount: TOTAL_FOLDER_COUNT,
    projectSizeMB: PROJECT_SIZE_MB,
}));
</script>

<style lang="scss">
.line_number {
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
</style>
