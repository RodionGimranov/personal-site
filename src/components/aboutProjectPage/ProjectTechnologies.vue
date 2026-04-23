<template>
    <div class="about_project_info_container">
        <p class="about_project_info_title">{{ $t("projectsLocale.stack_title") }}</p>
        <div class="flex flex-wrap items-start justify-start gap-[6px]">
            <Badge
                v-for="(tech, index) in technologies"
                :key="index"
                :label="tech"
                size="medium"
                color="blue"
                shape="pill"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import Badge from "@/components/ui/atoms/Badge.vue";

interface Props {
    technologies: string[];
}

withDefaults(defineProps<Props>(), {
    technologies: () => [],
});
</script>

<style lang="scss"></style>
