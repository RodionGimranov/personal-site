<template>
    <div class="home_projects_block">
        <ProjectCard />
        <div class="view_all_btn_container">
            <Button
                buttonType="router-link"
                :to="'/Projects'"
                buttonTitle="View All"
                padding="6px 12px"
                fontSize="22px"
                fontWeight="500"
                withIcon="true"
                @click="viewAllProject"
            />
        </div>
    </div>
</template>

<script setup>
import emitter from "../../eventBus.js";

import ProjectCard from "../ProjectCard.vue";
import Button from "../ui/Button.vue";

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
}
</style>
