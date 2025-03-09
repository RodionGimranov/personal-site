<template>
    <div class="projects_list">
        <div
            class="project_card"
            @click="selectProject(project)"
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
                <source :src="project.project_cover" type="video/mp4" />
                Your browser does not support the video :(
            </video>
            <div class="project_card_info">
                <p class="project_name">{{ project.name }}</p>
                <div class="card_viewing_sign_container">
                    <img class="card_viewing_sign" :src="viewing_sign" alt="Viewing Sign" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

import { projectDataList } from "../data/projectDataList.js";

import emitter from "../eventBus.js";

import viewing_sign from "/images/svg/viewing-sign-icon.svg";

const displayedProjects = ref(projectDataList);

const selectProject = (project) => {
    emitter.emit("show-project-modal", project);
};
</script>

<style lang="scss">
.projects_list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 75px;
}

.project_card {
    position: relative;
    width: 350px;
    height: 230px;
    cursor: pointer;
    transition: 0.2s;
    overflow: hidden;
    border-radius: 40px;
    background: $third_bg;
    border: 1px solid $card_border;

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

.project_card_info {
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 100;
    padding: 12px;
    transition: 0.2s;
    background: rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.project_card:hover .project_card_info {
    opacity: 1;
}

.project_name {
    padding: 4px 12px;
    border-radius: 100px;
    background: $content_bg;
    backdrop-filter: blur(20px);

    font-size: 18px;
    font-weight: 400;
    color: $primary_white;
}

.card_viewing_sign_container {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    background: $content_bg;
    backdrop-filter: blur(20px);

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
