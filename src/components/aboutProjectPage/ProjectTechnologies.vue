<template>
    <div class="about_project_info_container">
        <p class="about_project_info_title">{{ $t("message.technologies_title") }}</p>
        <div class="flex justify-start items-start flex-wrap gap-1.5 common_width_size">
            <Badge
                v-for="(tech, index) in technologies"
                :key="index"
                :label="tech.name"
                size="medium"
                color="blue"
                shape="pill"
            />
        </div>
    </div>
</template>

<script setup>
import Badge from "@/components/ui/atoms/Badge.vue";

defineProps({
    technologies: { type: Array, required: true, default: () => [] },
});
</script>

<style lang="scss"></style>
