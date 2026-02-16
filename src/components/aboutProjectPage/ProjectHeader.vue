<template>
    <div class="flex justify-between items-center mb-8! common_width_size">
        <p class="project_large_name text-[28px] font-medium text-primary-dark">
            {{ name }}
        </p>
        <div class="flex justify-start items-end gap-2.5">
            <Button
                buttonType="external"
                :href="codeUrl"
                :buttonText="$t('projectsLocale.source_code_btn')"
                :disabled="!codeUrl"
            />
            <Button
                buttonType="external"
                :href="deployUrl"
                variant="_blue"
                :buttonText="$t('projectsLocale.visit_btn')"
                :disabled="!deployUrl"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/atoms/Button.vue";

interface Props {
    name: string;
    codeUrl?: string;
    deployUrl?: string;
}

withDefaults(defineProps<Props>(), {
    codeUrl: "",
    deployUrl: "",
});
</script>

<style lang="scss"></style>
