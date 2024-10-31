<template>
    <transition name="show-project-modal">
        <section v-if="project" class="project_modal_container">
            <div ref="projectModalRef" class="project_modal">
                <div class="project_modal_header">
                    <p class="project_modal_card_name">{{ project.name }}</p>
                    <button class="close_project_modal_btn" @click="closeProjectModal">
                        <img
                            class="close_icon"
                            src="../assets/images/svg/cross-icon.svg"
                            alt="Cross icon"
                        />
                    </button>
                </div>
                <div class="project_modal_content">
                    <video
                        :key="project.large_project_cover"
                        class="project_large_video"
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
                    <div class="modal_project_info">
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
                        <a :href="project.link_to_deploy" class="project_btn" target="_blank"
                            >Live Demo</a
                        >
                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const projectModalRef = ref(null);

const props = defineProps({
    project: Object,
});

const emit = defineEmits(["closeProjectModal"]);

const closeProjectModal = () => {
    emit("closeProjectModal");
};

onClickOutside(projectModalRef, () => {
    closeProjectModal();
});
</script>

<style lang="scss">
.project_modal_container {
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

.project_modal {
    width: 1200px;
    padding: 15px;
    overflow: hidden;
    border-radius: 30px;
    background: $secondary_bg;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
}

.project_modal_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.project_modal_card_name {
    font-size: 34px;
    font-weight: 500;
    color: $primary_white;
}

.close_project_modal_btn {
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

.project_modal_content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 25px;
}

.project_large_video {
    min-width: 600px;
    height: 350px;

    object-fit: cover;
    border-radius: 20px;
    background: $third_bg;
}

.modal_project_info {
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
    color: $third_gray;
}

.project_detail {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    color: $primary_white;
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
    color: $primary_bg;
}

.project_btn {
    transition: 0.2s;
    padding: 6px 24px;
    border-radius: 100px;
    background: $button_default;

    font-size: 24px;
    font-weight: 400;
    color: $primary_white;
    text-align: center;

    &:hover {
        background: $button_hover;
    }

    &:active {
        background: $button_active;
    }
}

.show-project-modal-enter-active,
.show-project-modal-leave-active {
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.show-project-modal-enter-from,
.show-project-modal-leave-to {
    opacity: 0;
}

.show-project-modal-enter-to,
.show-project-modal-leave-from {
    opacity: 1;
}
</style>
