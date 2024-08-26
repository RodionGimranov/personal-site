<template>
    <transition name="close-changelog-page">
        <main v-show="isVisible" class="changelog_page_container">
            <div class="close_changelog_container" :class="{ margin_bottom: isMarginBottom }">
                <button
                    class="close_changelog_page_btn"
                    @click="closeChangelogPage"
                    @mouseover="hanleMouseOver"
                    @mouseout="hanleMouseOut"
                >
                    <img
                        class="close_changelog_btn_icon"
                        src="../assets/images/svg/cross-icon.svg"
                        alt="Cross icon"
                    />
                </button>
            </div>
            <p class="page_title changelog_page_title">
                <img
                    class="note_icon"
                    src="../assets/images/svg/note-icon.svg"
                    alt="Note icon"
                />Changelog
            </p>
            <div class="sort_by_container">
                <p class="sort_by_title">Sort By</p>
                <button
                    class="sort_by_old_btn"
                    @click="useSortOld"
                    :class="{ activeSort: isOldSortActive }"
                >
                    Old
                </button>
                <button
                    class="sort_by_new_btn"
                    @click="useSortNew"
                    :class="{ activeSort: isNewSortActive }"
                >
                    New
                </button>
                <span class="sort_by_btn_bg" :class="bgClass"></span>
            </div>
            <div class="update_list">
                <UpdateCard
                    v-for="update in displayedUpdates"
                    :key="update.id"
                    :update="update"
                />
            </div>
        </main>
    </transition>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

import { updateDataList } from "../data/updateDataList.js";
import { useSort } from "../composablse/useSort.js";

import UpdateCard from "../components/changelogPageComponents/UpdateCard.vue";

const isMarginBottom = ref(false);
const isVisible = ref(true);

const router = useRouter();

const hanleMouseOver = () => {
    isMarginBottom.value = true;
};

const hanleMouseOut = () => {
    isMarginBottom.value = false;
};

const {
    isOldSortActive,
    isNewSortActive,
    useSortOld,
    useSortNew,
    bgClass,
    displayedData: displayedUpdates,
} = useSort(updateDataList);

const closeChangelogPage = () => {
    isVisible.value = false;
    setTimeout(() => {
        router.push("/Home");
    }, 500);
};

onBeforeUnmount(() => {
    isVisible.value = true;
});
</script>

<style lang="scss">
.close_changelog_container {
    width: 100%;
    margin-bottom: 20vh;
    transition: all 0.3s ease-out;

    display: flex;
    justify-content: center;
    align-items: center;

    &.margin_bottom {
        margin-bottom: calc(20vh + 50px);
    }
}

.close_changelog_page_btn {
    width: 46px;
    height: 46px;

    border-radius: 100px;
    backdrop-filter: blur(20px);
    background: $header_bg_color;
    transition: all 0.3s ease-out 0s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.1);
        background: $button_hover_color;
    }

    &:active {
        background: $button_active_color;
    }
}

.changelog_page_container {
    width: 1200px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.sort_by_container {
    margin-bottom: 50px;
    border-radius: 100px;
    padding: 4px 4px 4px 19px;
    background: $header_bg_color;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
}

.sort_by_title {
    font-size: 20px;
    font-weight: 500;
    color: $primary_white_color;
}

.sort_by_old_btn,
.sort_by_new_btn {
    transition: 0.2s;
    padding: 8px 16px;
    border-radius: 100px;

    font-size: 20px;
    font-weight: 500;
    color: $primary_gray_color;

    &:hover {
        color: $primary_white_color;
    }

    &.activeSort {
        color: $primary_white_color;
    }
}

.sort_by_btn_bg {
    position: absolute;
    height: 40px;
    z-index: -1;
    transition: 0.2s;
    border-radius: 100px;
    background: $header_button_bg_color;
}

.bg_old {
    width: 62.21px;
    transform: translate3d(69.71px, 0, 0);
}

.bg_new {
    width: 71.8px;
    transform: translate3d(137px, 0, 0);
}

.update_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.close-changelog-page-leave-active {
    transition: all 0.5s;
}

.close-changelog-page-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

.close-changelog-page-leave-to {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
}
</style>
