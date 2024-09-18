<template>
    <transition name="show-changelog-modal">
        <section class="changelog_modal_container">
            <div class="changelog_modal">
                <div ref="changelog_modal_ref"   class="changelog_scroller_container">
                    <div class="changelog_modal_header">
                        <p class="changelog_modal_title" ref="change_text_size">Changelog</p>
                        <button class="close_changelog_modal_btn" @click="closeChangelogModal">
                            <img
                                class="close_icon"
                                src="../assets/images/svg/cross-icon.svg"
                                alt="Cross icon"
                            />
                        </button>
                    </div>
                    <div class="update_info" v-for="update in updateDataList">
                        <div class="update_info_text">
                            <p class="update_version">{{ update.version }}</p>
                            <p class="update_date">{{ update.date }}</p>
                        </div>
                        <p
                            class="update_description"
                            v-for="description in update.description"
                            :key="description.text"
                        >
                            {{ description.text }}.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { onClickOutside } from "@vueuse/core";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import { updateDataList } from "../data/updateDataList.js";

const changelog_modal_ref = ref(null);
// const change_text_size = ref(null);

updateDataList.reverse();

const emit = defineEmits(["closeChangelogModal"]);

const closeChangelogModal = () => {
    emit("closeChangelogModal");
};

onClickOutside(changelog_modal_ref, () => {
    closeChangelogModal();
});

// onMounted(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to(change_text_size.value, {
//         scrollTrigger: {
//             trigger: change_text_size.value,
//             scroller: changelog_modal_ref.value,
//             start: "top top",
//             end: "bottom bottom",
//             scrub: true,
//         },
//         fontSize: "26px",
//         color: "#949494",
//         ease: "power2.out",
//     });
// });
</script>

<style lang="scss">
.changelog_modal_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    z-index: 9999;
    backdrop-filter: blur(20px);
    background: $modal_container_bg;

    display: flex;
    justify-content: center;
    align-items: center;
}

.changelog_modal {
    max-width: 600px;
    max-height: 400px;

    overflow: hidden;
    border-radius: 30px;
    background: $secondary_bg;
    display: flex;
}

.changelog_scroller_container {
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0px 12px 20px 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}

.changelog_modal_header {
    position: sticky;
    top: 0px;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 5px;
    background: $secondary_bg;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.changelog_modal_title {
    transition: 0.2s;
    font-size: 30px;
    font-weight: 500;
    color: $primary_white;
}

.close_changelog_modal_btn {
    width: 38px;
    height: 38px;

    transition: 0.2s;
    border-radius: 100px;
    background: $button_default;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: $button_hover;
    }

    &:active {
        background: $button_active;
    }
}

.close_icon {
    width: 18px;
    height: 18px;
}

.update_info {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid $third_gray;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0px;
    }
}

.update_info_text {
    width: 100%;
    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.update_version {
    font-size: 22px;
    font-weight: 500;
    color: $primary_white;
}

.update_description {
    margin-bottom: 3px;
    font-size: 18px;
    font-weight: 400;
    color: $primary_white;

    &:last-child {
        margin-bottom: 0px;
    }
}

.update_date {
    font-size: 18px;
    font-weight: 400;
    color: $third_gray;
}

.show-changelog-modal-enter-active,
.show-changelog-modal-leave-active {
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.show-changelog-modal-enter-from,
.show-changelog-modal-leave-to {
    opacity: 0;
}

.show-changelog-modal-enter-to,
.show-changelog-modal-leave-from {
    opacity: 1;
}
</style>
