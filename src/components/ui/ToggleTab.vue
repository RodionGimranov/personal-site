<template>
    <div class="toggle_tab_container" ref="containerRef">
        <component
            v-for="(tab, index) in tabs"
            :is="buttonType === 'router-link' ? RouterLink : 'button'"
            :key="tab.value"
            :class="['toggle_tab_btn', { _active: tab.value === activeValue }]"
            :to="buttonType === 'router-link' ? tab.to : undefined"
            @click="handleClick(tab.value)"
            :style="{ width: tab.width || 'auto' }"
            ref="tabRefs"
        >
            {{ tab.text || "Label" }}
        </component>
        <span class="toggle_tab_btn_bacground" :style="backgroundStyle"></span>
    </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    tabs: { type: Array, required: true },
    buttonType: { type: String, default: "button" },
    activeTab: { type: String, default: "" },
    bgStyle: { type: Object, default: () => ({}) },
});

const emit = defineEmits(["update:activeTab", "tab-click"]);

const activeValue = ref(props.activeTab || (props.tabs[0]?.value ?? ""));

watch(
    () => props.activeTab,
    (val) => {
        if (val) activeValue.value = val;
    },
);

const tabRefs = ref([]);
const containerRef = ref(null);
const backgroundStyle = ref({});

const updateBackground = () => {
    nextTick(() => {
        const index = props.tabs.findIndex((t) => t.value === activeValue.value);
        const el = tabRefs.value[index];

        const domEl = el?.$el ?? el;

        if (domEl && containerRef.value) {
            const containerRect = containerRef.value.getBoundingClientRect();
            const rect = domEl.getBoundingClientRect();
            backgroundStyle.value = {
                transform: `translateX(${rect.left - containerRect.left}px)`,
                width: `${rect.width}px`,
                ...props.bgStyle,
            };
        }
    });
};

const handleClick = (value) => {
    activeValue.value = value;
    emit("update:activeTab", value);
    emit("tab-click", value);
    updateBackground();
};

watch(activeValue, updateBackground, { immediate: true });
onMounted(updateBackground);
</script>

<style lang="scss">
.toggle_tab_container {
    position: relative;
    padding: 4px;
    border-radius: 100px;
    background: $third_white;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
}

.toggle_tab_btn {
    z-index: 2;
    transition: 0.2s;
    padding: 8px 12px;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: 500;
    color: $primary_gray;
    line-height: 22px !important;

    &._active {
        color: $primary_dark;
    }
}

.toggle_tab_btn_bacground {
    position: absolute;
    top: 4px;
    left: 0;
    height: calc(100% - 8px);
    z-index: 1;
    transition: 0.2s;
    border-radius: 100px;
    background: $secondary_white;
    pointer-events: none;
}
</style>
