<template>
    <div class="home_skills_block">
        <div class="skills_wrapper">
            <div
                v-for="(skill, index) in main_skills_stack"
                :key="index"
                class="skills_card"
                :style="{ '--drop-shadow-color': skill.skill_color }"
            >
                <p class="skill_title" :style="{ color: skill.skill_color }">
                    {{ skill.skill_title }}
                </p>
                <p class="skill_description">{{ skill.skill_description }}</p>
            </div>
        </div>
        <div class="physical_icons_container">
            <p class="action_prompt">pull icons...</p>
            <div
                class="physical_icons_wrapper"
                id="phycalsIcons"
                @mouseup="handleGrab"
                @mousedown="handleGrabbing"
                :class="{ _grabbing: isGrabbing }"
            ></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { phycalsIcons } from "../../libs/matter-js/phycalsIcons.js";

const main_skills_stack = [
    {
        skill_title: "Vue.js",
        skill_description:
            "Reactivity, props & emits, computed properties, lifecycle hooks, directives, composables.",
        skill_color: "#3DD68C",
    },
    {
        skill_title: "JavaScript",
        skill_description:
            "Asynchrony, algorithms and data structures, DOM & BOM, events, HTTP Requests.",
        skill_color: "#F1E05A",
    },
    {
        skill_title: "SCSS",
        skill_description:
            "Flexbox, animations, media queries, inheritance, nesting, mixins, directives, functions, modules",
        skill_color: "#C4538C",
    },
    {
        skill_title: "HTML",
        skill_description: "Semantic, cross-browser, responsive, and pixel perfect layout.",
        skill_color: "#E34C26",
    },
];

const isGrabbing = ref(false);

const handleGrab = () => {
    isGrabbing.value = false;
};

const handleGrabbing = () => {
    isGrabbing.value = true;
};

onMounted(() => {
    phycalsIcons();
});
</script>

<style lang="scss">
.home_skills_block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.skills_wrapper {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 15px;
}

.skills_card {
    width: 280px;
    height: 170px;

    padding: 10px;
    border-radius: 30px;
    will-change: filter;
    background: $secondary_bg;
    transition: all 0.2s linear;
    --drop-shadow-color: transparent;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    &:hover {
        transform: scale(0.95);
        filter: drop-shadow(0 0 15px var(--drop-shadow-color));
    }
}

.skill_title {
    font-size: 32px;
    font-weight: 500;
}

.skill_description {
    font-size: 20px;
    font-weight: 400;
    color: $primary_white;
    text-align: center;
}

.physical_icons_container {
    position: relative;
}

.action_prompt {
    position: absolute;
    top: -30px;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    font-size: 18px;
    font-weight: 400;
    color: $third_gray;
}

.physical_icons_wrapper {
    cursor: grab;
    overflow: hidden;
    border-radius: 30px;
    background: $secondary_bg;

    display: flex;
    justify-content: center;
    align-items: center;

    &._grabbing {
        cursor: grabbing;
    }
}
</style>
