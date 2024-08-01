<template>
    <main class="projects_page_container">
        <p class="page_title projects_page_title">
            <img
                class="folder_icon"
                src="../assets/images/svg/folder-icon.svg"
                alt="Folder icon"
            />Projects
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
        <div class="projects_list">
            <div
                class="project_card"
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
                <div class="project_card_info">
                    <p class="project_name">{{ project.name }}</p>
                    <div class="card_viewing_sign_container">
                        <img
                            class="card_viewing_sign"
                            src="../assets/images/svg/viewing-sign-icon.svg"
                            alt="Viewing Sign"
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
    <ProjectModal
        v-show="isCommonCardOpen"
        :project="selectedProjectData"
        @closeCommonCard="closeCommonCard"
    />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";

import { projectDataList } from "../data/projectDataList.js";
import { useSort } from "../composablse/useSort.js";

import ProjectModal from "../components/ProjectModal.vue";

const isCommonCardOpen = ref(false);
const selectedProjectData = ref(null);

const emit = defineEmits(["selectedProject"]);

const selectedProject = (project) => {
    selectedProjectData.value = project;
    isCommonCardOpen.value = true;
    emit("selectedProject", project);
};

const closeCommonCard = () => {
    isCommonCardOpen.value = false;
};

const handleKeydown = (event) => {
    if (event.key === "Escape") {
        closeCommonCard();
    }
};

onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
});

watchEffect(() => {
    if (isCommonCardOpen.value) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }
});

const {
    isOldSortActive,
    isNewSortActive,
    useSortOld,
    useSortNew,
    bgClass,
    displayedData: displayedProjects,
} = useSort(projectDataList);
</script>

<style lang="scss">
.projects_page_container {
    width: 1200px;
    margin-bottom: 150px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.projects_page_title {
    margin-top: 20vh;
}

.sort_by_container {
    margin-bottom: 50px;
    border-radius: 100px;
    padding: 4px 4px 4px 19px;
    background: $header_bg_color;

    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    transform: translate3d(136px, 0, 0);
}

.projects_list {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

.project_card_info {
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

.project_card:hover .project_card_info {
    opacity: 1;
}

.project_name {
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
</style>
