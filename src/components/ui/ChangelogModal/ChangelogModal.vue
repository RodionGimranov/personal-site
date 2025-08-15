<template>
    <section class="commnon_modal_container">
        <div class="common_modal_style changelog_modal_style" ref="modalRef">
            <div class="changelog_modal_header">
                <p class="modal_header_title">{{ $t("message.changelog_modal_title") }}</p>
                <CloseButton :action="closeChangelogModal" />
            </div>
            <div class="version_list_container">
                <div class="version_item_container" v-for="update in updates" :key="update.id">
                    <div class="changelog_version_header">
                        <p class="update_date">{{ update.version }}</p>
                        <p class="update_number">{{ update.date }}</p>
                    </div>
                    <p class="update_description">{{ update.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { onClickOutside } from "@vueuse/core";
import { useI18n } from "vue-i18n";

import { useEscapeKeyClose } from "@/composables/useEscapeKey.js";

import CloseButton from "@/components/ui/buttons/CloseButton.vue";

import changelogData from "@/data/changelogData.json";

const store = useStore();
const { locale } = useI18n();

const modalRef = ref(null);

function closeChangelogModal() {
    store.commit("modals/CLOSE_CHANGELOG_MODAL");
}

const updates = computed(() => changelogData[locale.value] || []);

onMounted(() => {
    onClickOutside(modalRef, closeChangelogModal);
});

useEscapeKeyClose(() => {
    closeChangelogModal();
});
</script>

<style lang="scss">
.changelog_modal_style {
    width: 600px;
    height: 400px;
}

.changelog_modal_header {
    width: 100%;
    padding: 16px;
    background: $primary_white;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.modal_header_title {
    font-size: 22px;
    font-weight: 500;
    color: $primary_dark;
}

.version_list_container {
    width: 100%;
    overflow: auto;
    margin-bottom: 16px;
    padding: 0px 16px 16px 16px;

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
    gap: 20px;
}

.changelog_version_header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
}

.update_date {
    font-size: 18px;
    font-weight: 500;
    color: $primary_dark;
}

.update_number {
    font-size: 16px;
    font-weight: 400;
    color: $third_gray;
}

.update_description {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: $primary_dark;
}
</style>
