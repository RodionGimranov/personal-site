<template>
    <div class="background_card_container common_bento_card_style">
        <button
            v-for="(item, index) in backgroundData"
            :key="index"
            class="background_section_btn"
            :style="{ background: item.background }"
            @click="item.action && item.action()"
        >
            <SvgIcon :name="item.icon" :width="40" :height="40" />
            <span>{{ $t(item.title) }}</span>
        </button>
    </div>
</template>

<script setup>
import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";



const backgroundData = [
    {
        icon: "work-experience-icon",
        title: "message.work_experience_title",
        background: "linear-gradient(180deg, rgba(0, 136, 255, 0.70) 0%, #0088FF 100%)",
        action: openWorkExperienceModal,
    },
    {
        icon: "education-icon",
        title: "message.education_title",
        background: "linear-gradient(180deg, rgba(210, 71, 228, 0.70) 0%, #D247E4 100%)",
        action: openEducationModal,
    },
];
</script>

<style lang="scss">
.background_card_container {
    width: 250px;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
}

.background_section_btn {
    width: 100%;
    height: 113px;
    padding: 10px;
    transition: 0.2s;
    border-radius: 22px;
    background: $primary_white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    // FOR TEST
    &:hover {
        opacity: 0.9;
    }

    span {
        font-size: 18px;
        font-weight: 400;
        margin: 0 0 2px 2px;
        color: $primary_white;
    }
}
</style>
