<template>
    <div class="commnon_modal_overlay">
        <div class="common_modal_style max-w-150 h-100" ref="modalRef">
            <div class="modal_header">
                <p class="modal_header_title">{{ $t("global.changelog_title") }}</p>
                <CloseButton @click="close" />
            </div>
            <div
                class="w-ffull pt-0! pr-4! pb-4! pl-4! overflow-auto flex flex-col justify-start items-start gap-5"
            >
                <div class="w-full flex gap-5" v-for="update in updates" :key="update.id">
                    <div class="flex flex-col justify-start items-center gap-1.5">
                        <span
                            class="sticky top-0 z-2 min-w-6 min-h-6 w-6 h-6 rounded-[100px] border border-black-10"
                            :class="getDotClasses(update)"
                        ></span>
                        <span class="h-full w-px bg-black-10"></span>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start">
                        <div class="w-full flex flex-col justify-start items-start gap-2">
                            <div class="flex justify-start items-end gap-2">
                                <p class="text-[16px] font-medium text-primary-dark">
                                    {{ update.version }}
                                </p>
                                <Badge
                                    :label="update.type"
                                    size="small"
                                    :color="typeColorMap[update.type]"
                                    shape="regular"
                                />
                            </div>
                            <p class="text-[14px] font-normal text-third-gray">
                                {{ update.date }}
                            </p>
                        </div>
                        <p class="text-[14px] font-normal text-primary-dark mt-2! mb-4!">
                            {{ update.summary }}
                        </p>
                        <div v-if="update.changes" class="flex flex-col justify-start items-start">
                            <p class="text-[16px] font-normal text-primary-dark mb-2!">
                                {{ $t("global.changes_title") }}
                            </p>
                            <ul class="list-disc pl-4! space-y-1!">
                                <li
                                    v-for="(item, index) in update.changes"
                                    :key="index"
                                    class="text-[14px] font-normal text-primary-dark"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { onClickOutside } from "@vueuse/core";

import { useModalStore } from "@/stores/useModalStore";
import { useLanguageStore } from "@/stores/useLanguageStore";

import CloseButton from "@/components/ui/atoms/CloseButton.vue";
import Badge from "@/components/ui/atoms/Badge.vue";

import changelogs from "@/data/changelogs.json";

const modalStore = useModalStore();
const languageStore = useLanguageStore();

const modalRef = ref<HTMLElement | null>(null);

const updates = computed(() => {
    const list = changelogs[languageStore.currentLocale] || [];
    return [...list].sort((a, b) => b.id - a.id);
});

const latestUpdate = computed(() => updates.value[0] || null);

const typeColorMap: Record<string, string> = {
    major: "purple",
    minor: "blue",
    improvement: "green",
    beta: "gray",
};

const getDotClasses = (update: any) => {
    const isActive = latestUpdate.value?.id === update.id;

    return [typeColorMap[update.type] || "gray", { "dot-active": isActive }];
};

const close = () => {
    modalStore.close("changelog");
};

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
        close();
    }
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
.gray {
    background: var(--light-gray);
}

.blue {
    background: var(--light-blue);
}

.green {
    background: var(--light-green);
}

.purple {
    background: var(--light-purple);
}
</style>
