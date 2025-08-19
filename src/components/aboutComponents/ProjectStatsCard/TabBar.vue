<template>
    <div class="top_bar_container">
        <div class="file_tab">
            <SvgIcon name="js-lang-icon" width="16" height="16" />
            <p class="file_name">projectData.js</p>
            <button class="top_bar_btn">
                <SvgIcon name="close-file-tab-icon" width="10.18" height="10.18" />
            </button>
        </div>
        <div class="toolbar_container">
            <button v-for="(btn, index) in toolbarButtons" :key="index" class="top_bar_btn">
                <SvgIcon :name="btn.name" :width="btn.width" :height="btn.height" />
            </button>
        </div>
    </div>
</template>

<script setup>
import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";

const toolbarButtons = [
    { name: "split-editor-icon", width: 13, height: 13 },
    { name: "more-actions-icon", width: 12, height: 12 },
];
</script>

<style lang="scss">
.top_bar_container {
    width: 100%;
    height: 36px;
    border-top: 0.47px solid $fifth_gray;
    border-bottom: 0.47px solid $fifth_gray;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.file_tab {
    height: 100%;
    cursor: pointer;
    padding: 10px 4px 10px 6px;
    border-top: 0.47px solid $third_blue;
    border-bottom: 0.47px solid $fifth_gray;
    border-left: 0.47px solid $fifth_gray;
    border-right: 0.47px solid $fifth_gray;

    display: flex;
    justify-self: flex-start;
    align-items: center;
    gap: 4px;
}

.file_name {
    font-size: 12.21px;
    font-weight: 400;
    color: $primary_white;
    line-height: 15px;
}

.top_bar_btn {
    padding: 4px;
    transition: 0.2s;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: $sixth_gray;
    }
}

.toolbar_container {
    height: 100%;
    margin-right: 6px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3px;
}
</style>
