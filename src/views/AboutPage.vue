<template>
    <div class="about_page_wrapper common_page_wrapper">
        <div class="row_cards">
            <GreetingCard />
            <LocationCard />
            <MusicPlayerCard />
        </div>
        <div class="row_cards">
            <ProjectStatsCard />
            <EducationCard />
        </div>
    </div>
</template>

<script setup>
import GreetingCard from "@/components/aboutComponents/GreetingCard.vue";
import LocationCard from "@/components/aboutComponents/LocationCard.vue";
import MusicPlayerCard from "@/components/aboutComponents/MusicPlayerCard.vue";
import ProjectStatsCard from "@/components/aboutComponents/ProjectStatsCard.vue";
import EducationCard from "@/components/aboutComponents/EducationCard.vue";
</script>

<style lang="scss">
.about_page_wrapper {
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}

.row_cards {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}
</style>
