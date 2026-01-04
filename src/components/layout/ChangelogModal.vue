<template>
    <div class="commnon_modal_overlay">
        <div class="changelog_modal_style common_modal_style" ref="modalRef">
            <div class="modal_header">
                <p class="modal_header_title">{{ $t("message.changelog_modal_title") }}</p>
                <CloseButton :action="close" />
            </div>
            <div class="version_list_container">
                <div class="version_item_container" v-for="update in updates" :key="update.id">
                    <div class="changelog_version_header">
                        <p class="update_date">{{ update.version }}</p>
                        <p class="update_number">{{ update.date }}</p>
                    </div>
                    <div class="update_description_list">
                        <p
                            class="update_description"
                            v-for="(desc, index) in update.descriptions"
                            :key="index"
                            v-html="formatBoldText(desc)"
                        ></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import { onClickOutside } from "@vueuse/core";
import { useI18n } from "vue-i18n";

import { useModalStore } from "@/stores/useModalStore";
import { useEscapeKeyClose } from "@/composables/useEscapeKey.js";
import { formatBoldText } from "@/utils/formatters.js";

import CloseButton from "@/components/ui/atoms/CloseButton.vue";

import changelogs from "@/data/changelogs.json";

const modalStore = useModalStore();

const { locale } = useI18n();
const modalRef = ref(null);

const close = () => {
    modalStore.close("changelog");
};

const updates = computed(() => {
    const list = changelogs[locale.value] || [];
    return [...list].sort((a, b) => b.id - a.id);
});

onMounted(() => {
    onClickOutside(modalRef, close);
});

useEscapeKeyClose(() => {
    close();
});
</script>

<style lang="scss">
.changelog_modal_style {
    max-width: 600px;
    height: 400px;
}

.version_list_container {
    width: 100%;
    overflow: auto;
    margin-bottom: 16px;
    padding: 0 16px 16px 16px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}

.version_item_container {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid $third_white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;

    &:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }
}

.changelog_version_header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
}

.update_date {
    font-size: 16px;
    font-weight: 500;
    color: $primary_dark;
}

.update_number {
    font-size: 16px;
    font-weight: 400;
    color: $third_gray;
}

.update_description_list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
}

.update_description {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: $primary_dark;
}
</style>
