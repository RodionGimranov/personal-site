<template>
    <div
        class="border-fifth-gray flex h-9 w-full cursor-pointer items-start justify-between border-t-[0.47px] border-b-[0.47px]"
    >
        <div class="file_tab flex h-full items-center justify-start gap-1 py-2.5! pr-1! pl-1.5!">
            <SvgIcon name="js-lang-icon" :width="14" :height="14" />
            <p class="text-primary-white ml-1! text-xs leading-3.75 font-normal">projectStats.js</p>
            <button
                class="hover:bg-sixth-gray! flex items-center justify-center rounded-sm bg-transparent p-1!"
                type="button"
            >
                <SvgIcon name="close-file-tab-icon" :width="10.18" :height="10.18" />
            </button>
        </div>
        <div class="mr-1.5! flex h-full items-center justify-start gap-0.75">
            <button
                v-for="(btn, index) in toolbarButtons"
                :key="index"
                class="hover:bg-sixth-gray! flex items-center justify-center rounded-sm p-1!"
                type="button"
            >
                <SvgIcon :name="btn.name" :width="btn.width" :height="btn.height" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

type ToolbarIconName = "claude-ai-icon" | "split-editor-icon" | "more-actions-icon";

type ToolbarButton = {
    name: ToolbarIconName;
    width: number;
    height: number;
};

const toolbarButtons: ToolbarButton[] = [
    { name: "claude-ai-icon", width: 14, height: 14 },
    { name: "split-editor-icon", width: 13, height: 13 },
    { name: "more-actions-icon", width: 12, height: 12 },
];
</script>

<style lang="scss">
.file_tab {
    border-top: 0.47px solid var(--third-blue);
    border-bottom: 0.47px solid var(--fifth-gray);
    border-left: 0.47px solid var(--fifth-gray);
    border-right: 0.47px solid var(--fifth-gray);
}
</style>
