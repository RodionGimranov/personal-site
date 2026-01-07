<template>
    <div class="project_stats_card_container">
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

<style lang="scss">
.project_stats_card_container {
    width: 520px;
    height: 250px;
    overflow: hidden;
    border-radius: 30px;
    background: var(--third-dark);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
</style>
