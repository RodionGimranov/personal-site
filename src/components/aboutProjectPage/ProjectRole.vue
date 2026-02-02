<template>
    <div class="about_project_info_container common_width_size">
        <p class="about_project_info_title">{{ $t("message.role_title") }}</p>
        <p class="about_project_info_subtitle">{{ role }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    role?: string;
}

withDefaults(defineProps<Props>(), {
    role: "",
});
</script>

<style lang="scss"></style>
