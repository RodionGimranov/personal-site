<template>
    <div
        class="bg-third-dark flex h-62.5 w-130 flex-col items-start justify-start overflow-hidden rounded-[30px]"
    >
        <WindowControls />
        <TabBar />
        <CodeEditor />
    </div>
</template>

<script setup lang="ts">
import WindowControls from "@/components/aboutComponents/ProjectStatsCard/WindowControls.vue";
import TabBar from "@/components/aboutComponents/ProjectStatsCard/TabBar.vue";
import CodeEditor from "@/components/aboutComponents/ProjectStatsCard/CodeEditor.vue";
</script>

<style lang="scss"></style>
