<template>
    <div class="flex justify-between items-center mb-8! common_width_size">
        <p class="project_large_name text-[28px] font-medium text-primary-dark">{{ name }}</p>
        <div class="flex justify-start items-end gap-2.5">
            <a :href="link_to_code" target="_blank">
                <Button as="span" :buttonText="$t('message.source_code_btn')" />
            </a>
            <a :href="link_to_deploy" target="_blank">
                <Button as="span" variant="_blue" :buttonText="$t('message.visit_btn')" />
            </a>
        </div>
    </div>
</template>

<script setup>
import Button from "@/components/ui/atoms/Button.vue";

defineProps({
    name: { type: String, required: true },
    codeUrl: { type: String, default: "#" },
    deployUrl: { type: String, default: "#" },
});
</script>

<style lang="scss"></style>
