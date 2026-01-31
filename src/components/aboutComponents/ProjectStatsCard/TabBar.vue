<template>
    <div
        class="w-full h-9 cursor-pointer flex justify-between items-start border-t-[0.47px] border-fifth-gray border-b-[0.47px]"
    >
        <div class="file_tab h-full flex justify-start items-center gap-1 py-2.5! pr-1! pl-1.5!">
            <SvgIcon name="js-lang-icon" :width="14" :height="14" />
            <p class="text-xs font-normal ml-1! text-primary-white leading-3.75">projectStats.js</p>
            <button
                class="p-1! rounded-sm flex justify-center items-center hover:bg-sixth-gray! bg-transparent"
                type="button"
            >
                <SvgIcon name="close-file-tab-icon" :width="10.18" :height="10.18" />
            </button>
        </div>
        <div class="h-full mr-1.5! flex justify-start items-center gap-0.75">
            <button
                v-for="(btn, index) in toolbarButtons"
                :key="index"
                class="p-1! rounded-sm flex justify-center items-center hover:bg-sixth-gray!"
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
