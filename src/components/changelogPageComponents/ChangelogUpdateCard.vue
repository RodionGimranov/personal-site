<template>
    <div class="update_info_card">
        <div class="update_info_text">
            <p class="update_version">{{ update.version }}</p>
            <p class="update_date">{{ update.date }}</p>
        </div>
        <p
            class="update_description"
            v-for="description in update.description"
            :key="description.text"
        >
            - {{ description.text }}.
        </p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    update: {
        type: Object,
        required: true,
    },
});
</script>

<style lang="scss">
.update_info_card {
    width: 100%;
    transition: 0.1s;
    border-radius: 30px;
    padding: 20px 20px 17px 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &:hover {
        background: $block_bg_color;
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

.update_date {
    font-size: 20px;
    font-weight: 400;
    color: $text_gray_color;
}
</style>
