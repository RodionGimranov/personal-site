<template>
    <div class="about_project_info_container common_width_size">
        <p class="about_project_info_title">{{ $t("message.role_title") }}</p>
        <p class="about_project_info_subtitle">{{ role }}</p>
    </div>
</template>

<script setup>
defineProps({
    role: { type: String, default: "" },
});
</script>

<style lang="scss"></style>
