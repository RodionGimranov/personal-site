<template>
    <div class="code_editor_container">
        <div class="line_number">
            <p v-for="n in 8" :key="n">{{ n }}</p>
        </div>
        <div class="code_text_container">
            <p>
                <span class="kw_export">export</span>
                <span class="kw_const">const</span>
                <span class="variable">projectData</span>
                <span class="punctuator">=</span>
                <span class="brace">{</span>
            </p>
            <p v-for="(value, key, index) in projectData" :key="key">
                <span class="key margin_left_34">{{ key }}</span>
                <span class="literal"> {{ value }}<span class="punctuator">,</span></span>
            </p>
            <p><span class="brace">}</span><span class="punctuator">;</span></p>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const projectData = computed(() => ({
    linesOfCode: store.getters.getLinesOfCode,
    fileCount: store.getters.getFileCount,
    folderCount: store.getters.getFolderCount,
    projectSizeMB: store.getters.getProjectSizeMB,
}));
</script>

<style lang="scss">
.code_editor_container {
    width: 100%;
    padding: 0px 0px 0px 20px;

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
        color: $primary_white;
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
    padding: 10px 0px 0px 0px;

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
        color: $primary_white;
        line-height: 20px;
        font-family: "Source Code Pro", monospace;
        font-optical-sizing: auto;
        font-style: normal;

        &:last-child {
            gap: 0px;
        }
    }
}

.kw_export {
    color: #c586c0;
}

.kw_const {
    color: #569cd6;
}

.variable {
    color: #4fc1ff;
}

.key {
    color: #9cdcfe;
}

.literal {
    color: #b5cea8;
}

.punctuator {
    color: #d4d4d4;
}

.brace {
    color: #ffd602;
}

.margin_left_34 {
    margin-left: 34px;
}
</style>
