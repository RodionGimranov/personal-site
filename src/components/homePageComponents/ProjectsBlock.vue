<template>
    <div class="home_projects_block">
        <ProjectCard />
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
import emitter from "../../eventBus.js";
import ProjectCard from "../ProjectCard.vue";

const viewAllProject = () => {
    emitter.emit("viewAllProject");
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
    color: $third_gray;

    transition: 0.2s;
    padding: 6px 12px;
    border-radius: 100px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        color: $primary_white;
        background: $button_hover;
    }

    &:active {
        background: $button_active;
    }
}

.navigation_arrow {
    fill: none;
    transition: 0.2s;
    stroke: #949494;
    margin-left: 10px;
}

.view_all_project_btn:hover .navigation_arrow {
    stroke: $primary_white;
    margin-left: 15px;
}
</style>
