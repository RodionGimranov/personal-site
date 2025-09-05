<template>
    <div class="education_card_container commom_card_style">
        <span class="education_card_title">{{ $t("message.education_title") }}</span>
        <div class="description_study_place_container">
            <div class="study_place" v-for="education in educationData" :key="education.id">
                <a
                    v-if="education.website"
                    :href="education.website"
                    class="education_place_name with_link"
                    target="_blank"
                >
                    {{ education.placeName }}
                    <SvgIcon name="external-link-icon" v-if="education.website" />
                </a>
                <span v-else class="education_place_name">{{ education.placeName }}</span>
                <p class="study_place_time">{{ education.placeAndTime }}</p>
                <p class="major_degree">{{ education.degree }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import SvgIcon from "@/components/ui/SvgIcon/SvgIcon.vue";

import education from "@/data/education.json";

const locale = useI18n().locale;

const educationData = computed(() => {
    const list = education[locale.value] || [];
    return [...list].sort((a, b) => b.id - a.id);
});
</script>

<style lang="scss">
.education_card_container {
    width: 520px;
    height: 250px;
    padding: 6px 16px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 36px;
}

.education_card_title {
    padding: 4px 8px;
    border-radius: 100px;
    backdrop-filter: blur(4px);
    background: $secondary_translucent_dark;

    font-size: 16px;
    font-weight: 400;
    color: $primary_white;
}

.description_study_place_container,
.study_place {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.description_study_place_container {
    width: 100%;
    gap: 16px;
}

.study_place {
    gap: 2px;
}

.education_place_name,
.study_place_time,
.major_degree {
    font-size: 16px;
    font-weight: 500;
    color: $primary_dark;
}

.with_link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: $primary_dark;

    &:hover {
        color: $third_gray;
    }
}

.major_degree {
    font-weight: 400;
}
</style>
