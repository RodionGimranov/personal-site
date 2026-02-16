<template>
    <div class="about_project_info_container">
        <p class="about_project_info_title">{{ $t("projectsLocale.technologies_title") }}</p>
        <div class="common_width_size flex flex-wrap items-start justify-start gap-1.5">
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

<script setup lang="ts">
import Badge from "@/components/ui/atoms/Badge.vue";

type TechnologyItem = {
    name: string;
};

interface Props {
    technologies: TechnologyItem[];
}

withDefaults(defineProps<Props>(), {
    technologies: () => [],
});
</script>

<style lang="scss"></style>
