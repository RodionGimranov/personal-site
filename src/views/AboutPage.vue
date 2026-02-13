<template>
    <div class="about_page_wrapper">
        <div class="row_cards_1">
            <GreetingCard />
            <LocationCard />
            <MusicPlayerCard />
        </div>
        <div class="large_block_card_wrapper">
            <div class="large_block_card_1">
                <div class="large_row_cards_1">
                    <EmptyCard />
                    <EmptyCard />
                </div>
                <ProjectStatsCard />
            </div>
            <div class="large_block_card_2">
                <div class="row_cards_2">
                    <EmptyCard />
                    <FigmaCard />
                </div>
                <PhysicsCard />
            </div>
        </div>
    </div>
</template>

<script setup>
import GreetingCard from "@/components/aboutComponents/GreetingCard.vue";
import LocationCard from "@/components/aboutComponents/LocationCard.vue";
import MusicPlayerCard from "@/components/aboutComponents/MusicPlayerCard/MusicPlayerCard.vue";
import ProjectStatsCard from "@/components/aboutComponents/ProjectStatsCard/ProjectStatsCard.vue";
import FigmaCard from "@/components/aboutComponents/FigmaCard.vue";
import PhysicsCard from "@/components/aboutComponents/PhysicsCard.vue";
import EmptyCard from "@/components/aboutComponents/EmptyCard.vue";
</script>

<style lang="scss">
.row_cards_1,
.large_row_cards_1,
.large_block_card_2,
.large_block_card_wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}

.about_page_wrapper,
.large_block_card_1,
.row_cards_2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
}
</style>
