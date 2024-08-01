<template>
    <transition name="show-modal-card">
        <section v-if="project" class="modal_project_card_container">
            <div ref="modalRef" class="modal_card_project">
                <div class="modal_card_header">
                    <p class="modal_project_card_name">{{ project.name }}</p>
                    <button class="close_modal_card_btn" @click="closeCommonCard">
                        <img
                            class="close_icon"
                            src="../assets/images/svg/cross-icon.svg"
                            alt="Cross icon"
                        />
                    </button>
                </div>
                <div class="modal_card_content">
                    <video
                        :key="project.large_project_cover"
                        class="modal_video_cover"
                        preload="metadata"
                        autoplay
                        loop
                        muted
                        playsinline
                        loading="lazy"
                    >
                        <source :src="project.large_project_cover" type="video/mp4" />
                        Your browser does not support the video :(
                    </video>
                    <div class="modal_project_card_info">
                        <div class="info_text_content">
                            <p class="project_title">Description</p>
                            <p class="project_detail">{{ project.description }}</p>
                            <p class="project_title">My Role</p>
                            <p class="project_detail">{{ project.role }}</p>
                            <p class="project_title">Tool Stack</p>
                            <div class="project_technologies_container">
                                <span
                                    class="tech_name"
                                    v-for="technologies in project.technologies"
                                    :key="technologies.name"
                                    :style="{ backgroundColor: technologies.color }"
                                >
                                    {{ technologies.name }}
                                </span>
                            </div>
                        </div>
                        <div class="info_project_btn">
                            <a :href="project.link_to_github" class="project_btn" target="_blank"
                                >GitHub</a
                            >
                            <a :href="project.link_to_deploy" class="project_btn" target="_blank"
                                >Live View</a
                            >
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

const modalRef = ref(null);

const props = defineProps({
    project: Object,
});

const emit = defineEmits(["closeCommonCard"]);

const closeCommonCard = () => {
    emit("closeCommonCard");
};

onClickOutside(modalRef, () => {
    closeCommonCard();
});
</script>

<style lang="scss">
.modal_project_card_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    z-index: 9999;
    backdrop-filter: blur(20px);
    background: $project_card_container_bg_color;

    display: flex;
    justify-content: center;
    align-items: center;
}

.modal_card_project {
    width: 1200px;
    padding: 15px;
    overflow: hidden;
    border-radius: 30px;
    background: $block_bg_color;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
}

.modal_card_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.modal_project_card_name {
    font-size: 34px;
    font-weight: 500;
    color: $primary_white_color;
}

.close_modal_card_btn {
    width: 38px;
    height: 38px;

    transition: 0.2s;
    border-radius: 100px;
    background: $button_default_color;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: $button_hover_color;
    }

    &:active {
        background: $button_active_color;
    }
}

.modal_card_content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 25px;
}

.modal_video_cover {
    min-width: 600px;
    height: 350px;

    object-fit: cover;
    border-radius: 20px;
    background: $card_bg_color;
}

.modal_project_card_info {
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.info_text_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.project_title {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 400;
    color: $text_gray_color;
}

.project_detail {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    color: $primary_white_color;
}

.project_technologies_container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 5px;
}

.tech_name {
    padding: 6px 12px;
    border-radius: 100px;

    font-size: 18px;
    font-weight: 500;
    color: $primary_body_color;
}

.info_project_btn {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.project_btn {
    transition: 0.2s;
    padding: 6px 24px;
    border-radius: 100px;
    background: $button_default_color;

    font-size: 24px;
    font-weight: 500;
    color: $text_gray_color;
    text-align: center;

    &:hover {
        color: $primary_white_color;
        background: $button_hover_color;
    }

    &:active {
        background: $button_active_color;
    }
}

.show-modal-card-enter-active,
.show-modal-card-leave-active {
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.show-modal-card-enter-from,
.show-modal-card-leave-to {
    opacity: 0;
}

.show-modal-card-enter-to,
.show-modal-card-leave-from {
    opacity: 1;
}
</style>
