<template>
    <div class="about_project_info_container common_width_size">
        <p class="about_project_info_title">{{ $t("projectsLocale.description_title") }}</p>
        <p class="about_project_info_subtitle common_width_size">
            {{ description }}
        </p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    description?: string;
}

withDefaults(defineProps<Props>(), {
    description: "",
});
</script>

<style lang="scss"></style>
