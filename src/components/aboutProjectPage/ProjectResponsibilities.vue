<template>
    <div class="about_project_info_container common_width_size">
        <p class="about_project_info_title">
            {{ $t("message.areas_of_responsibility_titl") }}
        </p>
        <ul class="areas_list m-0 list-disc pl-3.5!">
            <li
                v-for="(area, index) in areas"
                :key="index"
                class="about_project_info_subtitle common_width_size"
            >
                {{ area.area }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
type AreaItem = {
    area: string;
};

interface Props {
    areas: AreaItem[];
}

withDefaults(defineProps<Props>(), {
    areas: () => [],
});
</script>

<style lang="scss">
.areas_list {
    li {
        margin: 0;
        padding: 0;
    }
}
</style>
