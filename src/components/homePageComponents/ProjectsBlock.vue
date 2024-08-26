<template>
    <div class="home_projects_block">
        <div class="home_projects_list">
            <div
                class="home_project_card"
                @click="selectedProject(project)"
                v-for="project in displayedProjects"
                :key="project.id"
            >
                <video
                    class="video_cover"
                    preload="metadata"
                    autoplay
                    loop
                    muted
                    playsinline
                    loading="lazy"
                >
                    <source :src="project.small_project_cover" type="video/mp4" />
                    Your browser does not support the video :(
                </video>
                <div class="home_project_card_info">
                    <p class="home_project_name">{{ project.name }}</p>
                    <div class="card_viewing_sign_container">
                        <img
                            class="card_viewing_sign"
                            src="../../assets/images/svg/viewing-sign-icon.svg"
                            alt="Viewing Sign"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="view_all_btn_container">
            <router-link to="/Projects" class="view_all_project_btn" @click="viewAllProject"
                >View All
                <svg
                    class="navigation_arrow"
                    width="9"
                    height="13"
                    viewBox="0 0 9 13"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.04199 12L7.04122 7.28632C7.5508 6.88594 7.55079 6.11406 7.04122 5.71368L1.04199 1"
                        stroke-width="2.5"
                        stroke-linecap="round"
                    />
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import emitter from "../../eventBus.js";

import { projectDataList } from "../../data/projectDataList.js";

const selectedProjectIds = [0, 4, 5];
const displayedProjects = ref([]);

const updateDisplayedProjects = () => {
    displayedProjects.value = selectedProjectIds
        .map((id) => projectDataList.find((project) => project.id === id))
        .filter(Boolean);
};

updateDisplayedProjects();

const viewAllProject = () => {
    emitter.emit("viewAllProject");
};

const emit = defineEmits(["selectedProject"]);

const selectedProject = (project) => {
    emit("selectedProject", project);
};
</script>

<style lang="scss">
.home_projects_block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.home_projects_list {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 75px;
}

.home_project_card {
    position: relative;
    width: 350px;
    height: 230px;

    cursor: pointer;
    overflow: hidden;
    border-radius: 30px;
    background: $card_bg_color;
    border: 1px solid $card_border_color;

    display: flex;
    justify-content: center;
    align-items: center;
}

.video_cover {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.home_project_card_info {
    width: 100%;
    height: 100%;

    opacity: 0;
    z-index: 100;
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.home_project_card:hover .home_project_card_info {
    opacity: 1;
}

.home_project_name {
    padding: 4px 12px;
    border-radius: 100px;
    backdrop-filter: blur(20px);
    background: $card_project_name_bg_color;

    font-size: 18px;
    font-weight: 400;
    color: $primary_white_color;
}

.card_viewing_sign_container {
    width: 30px;
    height: 30px;

    border-radius: 100px;
    backdrop-filter: blur(20px);
    background: $card_project_name_bg_color;

    display: flex;
    justify-content: center;
    align-items: center;
}

.card_viewing_sign {
    width: 20px;
    height: 20px;
}

.view_all_btn_container {
    width: 100%;
    margin-top: 50px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
}

.view_all_project_btn {
    font-size: 22px;
    font-weight: 500;
    color: $text_gray_color;

    transition: 0.2s;
    padding: 6px 12px;
    border-radius: 100px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        color: $primary_white_color;
        background: $button_hover_color;
    }

    &:active {
        background: $button_active_color;
    }
}

.navigation_arrow {
    fill: none;
    transition: 0.2s;
    stroke: #949494;
    margin-left: 10px;
}

.view_all_project_btn:hover .navigation_arrow {
    stroke: $primary_white_color;
    margin-left: 15px;
}
</style>
