<template>
    <transition name="show-modal">
        <section class="modal_container changelog_modal_container">
            <div ref="changelogModalRef" class="changelog_modal">
                <div class="changelog_modal_header">
                    <p class="changelog_title">What's new?</p>
                    <RoundButton
                        :roundButtonWidth="'32px'"
                        :roundButtonHeight="'32px'"
                        :crossIconWidth="'14px'"
                        :crossIconHeight="'14px'"
                        @click="closeChangelogModal"
                    />
                </div>
                <div class="update_list">
                    <div
                        v-for="update in updateDataList.updateDataList"
                        :key="update.id"
                        class="update_card"
                    >
                        <p class="update_version update_text">{{ update.version }}</p>
                        <p class="update_date update_text">{{ update.date }}</p>
                        <div class="update_descripton update_text">
                            <p v-for="(desc, index) in update.description" :key="index">
                                • {{ desc.text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

import RoundButton from "../ui/RoundButton.vue";

import updateDataList from "../../data/updateDataList.json";

const changelogModalRef = ref(null);

const emit = defineEmits(["closeChangelogModal"]);

const closeChangelogModal = () => {
    emit("closeChangelogModal");
};

onClickOutside(changelogModalRef, () => {
    closeChangelogModal();
});
</script>

<style lang="scss">
.changelog_modal {
    max-width: 500px;
    max-height: 400px;
    border-radius: 30px;
    background: $secondary_bg;
    padding: 15px 15px 30px 0px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.changelog_modal_header {
    width: 100%;
    margin-bottom: 15px;
    padding: 0px 0px 0px 15px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.changelog_title {
    font-size: 24px;
    font-weight: 400;
    color: $primary_white;
}

.update_list {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0px 5px 0px 15px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
}

.update_card {
    width: 100%;
    border-bottom: 1px solid $menu_bar_bg;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &:last-child {
        border-bottom: none;
    }
}

.update_text {
    font-size: 16px;
    font-weight: 400;
}

.update_version {
    margin-bottom: 5px;
    color: $primary_white;
}

.update_date {
    margin-bottom: 15px;
    color: $third_gray;
}

.update_descripton {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    color: $third_gray;

    &:last-child {
        margin-bottom: 15px;
    }
}
</style>
