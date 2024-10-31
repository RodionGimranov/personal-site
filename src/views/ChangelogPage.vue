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
            <div class="changelog_card_container">
                <div class="changelog_page_title_container">
                    <p class="changelog_page_title">Changelog</p>
                </div>
                <UpdateCard />
            </div>
        </main>
    </transition>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

import UpdateCard from "../components/ChangelogPageComponents/UpdateCard.vue";

const isMarginBottom = ref(false);
const isVisible = ref(true);

const router = useRouter();

const hanleMouseOver = () => {
    isMarginBottom.value = true;
};

const hanleMouseOut = () => {
    isMarginBottom.value = false;
};

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
    position: sticky;
    top: 20px;
    width: 100%;

    z-index: 999;
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
    background: $header_bg;
    backdrop-filter: blur(20px);
    transition: all 0.3s ease-out 0s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.1);
        background: $button_hover;
    }

    &:active {
        background: $button_active;
    }
}

.changelog_page_container {
    width: 1000px;
    margin-bottom: 20px;

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

.changelog_card_container {
    position: relative;
    width: 100%;

    overflow: hidden;
    border-radius: 30px;
    background: $secondary_bg;
    padding: 0px 30px 30px 30px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.changelog_page_title_container {
    position: sticky;
    top: 0px;
    width: 100%;
    padding: 30px 0px;
    background: $secondary_bg;
}

.changelog_page_title {
    font-size: 28px;
    font-weight: 400;
    color: $primary_white;
}
</style>
