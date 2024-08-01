<template>
    <div class="update_info_card" v-for="update in updateDataList" :key="update.id">
        <div class="update_info_text">
            <p class="update_version">{{ update.version }}</p>
            <p class="update_description">{{ update.update_description_str_1 }}</p>
            <p class="update_description" v-if="update.update_description_str_2">
                {{ update.update_description_str_2 }}
            </p>
            <p class="update_description" v-if="update.update_description_str_3">
                {{ update.update_description_str_3 }}
            </p>
            <p class="update_description" v-if="update.update_description_str_4">
                {{ update.update_description_str_4 }}
            </p>
            <p class="update_description" v-if="update.update_description_str_5">
                {{ update.update_description_str_5 }}
            </p>
        </div>
        <p class="update_date">{{ update.data_of_update }}</p>
    </div>
</template>

<script setup>
import { updateDataList } from "../../data/updateDataList.js";
</script>

<style lang="scss">
.update_info_card {
    width: 100%;
    transition: 0.1s;
    border-radius: 30px;
    padding: 20px 20px 17px 20px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &:hover {
        background: $block_bg_color;
    }
}

.update_info_text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.update_version {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 500;
    color: $primary_white_color;
}

.update_description {
    margin-bottom: 3px;
    font-size: 20px;
    font-weight: 400;
    color: $primary_white_color;
}
</style>
