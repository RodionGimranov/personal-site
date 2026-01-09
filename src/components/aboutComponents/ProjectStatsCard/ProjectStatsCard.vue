<template>
    <div
        class="overflow-hidden flex flex-col justify-start items-start w-130 h-62.5 rounded-[30px] bg-third-dark"
    >
        <WindowControls />
        <TabBar />
        <CodeEditor />
    </div>
</template>

<script setup>
import WindowControls from "@/components/aboutComponents/ProjectStatsCard/WindowControls.vue";
import TabBar from "@/components/aboutComponents/ProjectStatsCard/TabBar.vue";
import CodeEditor from "@/components/aboutComponents/ProjectStatsCard/CodeEditor.vue";
</script>

<style lang="scss"></style>
