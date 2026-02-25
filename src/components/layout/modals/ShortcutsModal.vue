<template>
    <div class="commnon_modal_overlay">
        <div class="common_modal_style w-[317px]" ref="modalRef">
            <div class="modal_header">
                <p class="modal_header_title">
                    {{ $t("global.kb_shortcuts_title") }}
                </p>
                <CloseButton @click="close" />
            </div>
            <div
                v-for="section in sections"
                :key="section.title"
                class="kb_shortcuts_section flex w-full flex-col gap-1.5 pr-4! pl-4!"
            >
                <p class="text-third-gray mb-0.5! text-sm font-normal">
                    {{ $t(section.title) }}
                </p>
                <div
                    v-for="item in section.items"
                    :key="item.label"
                    class="flex w-full items-center justify-between"
                >
                    <p class="text-primary-dark text-sm font-normal">
                        {{ $t(item.label) }}
                    </p>
                    <div class="flex gap-1.5">
                        <Kbd v-for="key in item.keys" :key="key" :label="key" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useModalStore } from "@/stores/useModalStore";

import CloseButton from "@/components/ui/atoms/CloseButton.vue";
import Kbd from "@/components/ui/atoms/Kbd.vue";

const modalStore = useModalStore();
const modalRef = ref<HTMLElement | null>(null);

const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

const baseModifier = isMac ? "⌥" : "Alt";
const shiftKey = isMac ? "⇧" : "Shift";

const sections = [
    {
        title: "global.shortcuts_nav_title",
        items: [
            { label: "global.home_btn_title", keys: [baseModifier, "1"] },
            { label: "global.about_btn_title", keys: [baseModifier, "2"] },
            { label: "global.projects_btn_title", keys: [baseModifier, "3"] },
            { label: "global.gallery_btn_title", keys: [baseModifier, "4"] },
        ],
    },
    {
        title: "global.shortcuts_actions_title",
        items: [
            { label: "global.change_language", keys: [baseModifier, shiftKey, "L"] },
            { label: "global.kb_shortcuts_title", keys: [baseModifier, shiftKey, "K"] },
            { label: "global.changelog_title", keys: [baseModifier, shiftKey, "C"] },
        ],
    },
];

const close = () => {
    modalStore.close("shortcuts");
};

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
};

onMounted(() => {
    onClickOutside(modalRef, close);
    window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeydown);
});
</script>

<style lang="scss">
.kb_shortcuts_section {
    &:not(:last-child) {
        margin-bottom: 24px;
    }

    &:last-child {
        margin-bottom: 16px;
    }
}
</style>
