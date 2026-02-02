<template>
    <div class="about_project_info_container common_width_size">
        <p class="about_project_info_title">{{ $t("message.context_purpose_title") }}</p>
        <p class="about_project_info_subtitle common_width_size">
            {{ context }}
        </p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    context?: string;
}

withDefaults(defineProps<Props>(), {
    context: "",
});
</script>

<style lang="scss"></style>
