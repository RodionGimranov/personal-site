<template>
    <div
        class="bg-fourth-gray relative flex items-start justify-start gap-0.5 overflow-hidden rounded-[100px] p-1!"
        ref="containerRef"
    >
        <template v-if="useToggleText">
            <button
                v-for="(text, index) in textOptions"
                :key="'text-' + index"
                :class="['toggle_tab text-sm', { _active: activeIndex === index }]"
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
                :class="['toggle_tab h-7! p-1! text-sm', { _active: activeIndex === index }]"
                @click="setActiveTab(index)"
                ref="buttons"
            >
                <SvgIcon :name="icon" />
            </button>
        </template>
        <span
            class="bg-primary-white absolute top-1 z-1 h-7 rounded-full transition-all duration-200 ease-in-out"
            :style="{ width: bgWidth + 'px', left: bgLeft + 'px' }"
        ></span>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from "vue";

import SvgIcon from "@/components/ui/atoms/SvgIcon.vue";

const props = defineProps({
    useToggleIcon: Boolean,
    useToggleText: Boolean,
    textOptions: { type: Array, default: () => [] },
    iconOptions: { type: Array, default: () => [] },
    activeIndex: { type: Number, required: true },
});

const emit = defineEmits(["update:activeIndex"]);

const buttons = ref([]);
const bgWidth = ref(0);
const bgLeft = ref(0);

function setActiveTab(index) {
    emit("update:activeIndex", index);
}

function updateBgPosition() {
    const btn = buttons.value[props.activeIndex];
    if (!btn) return;

    const { offsetLeft, offsetWidth } = btn;
    bgLeft.value = offsetLeft;
    bgWidth.value = offsetWidth;
}

onMounted(async () => {
    await nextTick();
    updateBgPosition();
});

watch(
    () => props.activeIndex,
    async () => {
        await nextTick();
        updateBgPosition();
    },
);

watch(
    () => props.textOptions,
    async () => {
        await nextTick();
        updateBgPosition();
    },
);
</script>

<style scoped lang="scss">
.toggle_tab {
    z-index: 2;
    cursor: pointer;
    transition: 0.2s;
    padding: 4px 12px;
    border-radius: 100px;

    font-weight: 500;
    letter-spacing: 1px;
    color: var(--secondary-gray);

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: var(--primary-dark);
    }

    &._active {
        color: var(--primary-dark);
    }
}
</style>
