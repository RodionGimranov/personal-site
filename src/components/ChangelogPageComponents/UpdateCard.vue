<template>
    <div class="update_card_list">
        <div v-for="(update, index) in updateDataList" :key="update.id" class="update_card">
            <div class="update_card_header">
                <img
                    class="update_logo_image"
                    src="../../assets/images/svg/update-avatar-icon.svg"
                    alt="Logo image"
                />
                <div class="update_date_container">
                    <p class="update_number">Update {{ update.version }}</p>
                    <p class="update_date">{{ update.date }}</p>
                </div>
            </div>

            <div
                v-for="(desc, descIndex) in update.description"
                :key="descIndex"
                class="update_text_content"
            >
                <p class="update_title">{{ desc.title }}</p>
                <div class="update_title_text">
                    <p
                        v-for="(text, textIndex) in desc.text"
                        :key="textIndex"
                        class="update_description"
                    >
                        {{ text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { updateDataList } from "../../data/updateDataList.js";
</script>

<style lang="scss">
.update_card_list,
.update_card,
.update_text_content,
.update_title_text {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.update_card_list,
.update_card {
    gap: 25px;
}

.update_card_header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.update_logo_image {
    min-width: 40px;
    min-height: 40px;

    overflow: hidden;
    border-radius: 100px;
    background: $third_bg;
}

.update_date_container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.update_number {
    font-size: 20px;
    font-weight: 400;
    color: $primary_white;
}

.update_date {
    font-size: 14px;
    font-weight: 400;
    color: $third_gray;
}

.update_title {
    font-size: 18px;
    font-weight: 400;
    color: $primary_white;
    margin-bottom: 5px;
}

.update_description {
    font-size: 16px;
    font-weight: 400;
    color: $third_gray;
    margin-bottom: 5px;
}

.update_description:last-child {
    margin-bottom: 0px;
}
</style>
