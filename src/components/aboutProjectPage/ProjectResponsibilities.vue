<template>
    <div class="about_project_info_container common_width_size">
        <p class="about_project_info_title">
            {{ $t("message.areas_of_responsibility_titl") }}
        </p>
        <ul class="areas_list">
            <li
                class="about_project_info_subtitle common_width_size"
                v-for="(area, index) in areas"
                :key="index"
            >
                {{ area.area }}
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    areas: { type: Array, required: true, default: () => [] },
});
</script>

<style lang="scss">
.areas_list {
    margin: 0;
    list-style: disc;
    padding-left: 14px;

    &li {
        margin: 0;
        padding: 0;
    }
}
</style>
