<template>
    <div class="toggle_tab_container" ref="containerRef">
        <template v-if="useToggleText">
            <button
                v-for="(text, index) in textOptions"
                :key="'text-' + index"
                :class="['toggle_tab_btn', { _active: activeIndex === index }]"
                @click="setActiveTab(index)"
                ref="buttons"
            >
                {{ $t(text) }}
            </button>
        </template>
        <template v-if="useToggleIcon">
            <button
                v-for="(icon, index) in iconOptions"
                :key="'icon-' + index"
                :class="['toggle_tab_btn toggle_tab_icon_btn', { _active: activeIndex === index }]"
                @click="setActiveTab(index)"
                ref="buttons"
            >
                <SvgIcon :name="icon" />
            </button>
        </template>
        <span
            class="toggle_tab_btn_bg"
            :style="{ width: bgWidth + 'px', left: bgLeft + 'px' }"
        ></span>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";

import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";

const props = defineProps({
    useToggleIcon: { type: Boolean, default: false },
    useToggleText: { type: Boolean, default: true },
    textOptions: { type: Array, default: () => [] },
    iconOptions: { type: Array, default: () => [] },
    storageKey: { type: String, required: true },
});

const emit = defineEmits(["update:activeIndex"]);

const buttons = ref([]);
const activeIndex = ref(0);
const bgWidth = ref(0);
const bgLeft = ref(0);

onMounted(async () => {
    const savedIndex = localStorage.getItem(props.storageKey);
    activeIndex.value = savedIndex ? parseInt(savedIndex) : 0;
    emit("update:activeIndex", activeIndex.value);
    await nextTick();
    updateBgPosition();
});

function setActiveTab(index) {
    activeIndex.value = index;
    localStorage.setItem(props.storageKey, index.toString());
    emit("update:activeIndex", index);
    updateBgPosition();
}

function updateBgPosition() {
    const btn = buttons.value[activeIndex.value];
    if (btn) {
        const { offsetLeft, offsetWidth } = btn;
        bgLeft.value = offsetLeft;
        bgWidth.value = offsetWidth;
    }
}

watch(
    () => props.textOptions,
    async () => {
        await nextTick();
        updateBgPosition();
    },
);
</script>

<style lang="scss" scoped>
.toggle_tab_container {
    position: relative;
    padding: 4px;
    overflow: hidden;
    border-radius: 100px;
    background: $fourth_gray;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;
}

.toggle_tab_btn {
    z-index: 2;
    cursor: pointer;
    padding: 4px 12px;
    transition: 0.2s;
    border-radius: 100px;

    font-size: 14px;
    font-weight: 500;
    color: $secondary_gray;

    &:hover {
        color: $primary_dark;
    }

    &._active {
        color: $primary_dark;
    }
}

.toggle_tab_icon_btn {
    height: 28px !important;
    padding: 4px !important;
}

.toggle_tab_btn_bg {
    position: absolute;
    top: 4px;
    height: 28px;
    z-index: 1;
    border-radius: 100px;
    background: $primary_white;
    transition: 0.2s ease;
}
</style>
