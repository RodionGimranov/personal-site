<template>
    <div class="flex justify-start items-center w-full px-5! py-3! bg-fourth-dark">
        <div class="flex justify-start items-center gap-1.75">
            <span
                v-for="color in colors"
                :key="color"
                class="w-3 h-3 rounded-[100px]"
                :style="{ backgroundColor: color }"
            ></span>
        </div>
    </div>
</template>

<script setup lang="ts">
const colors = ["#FF6057", "#FFBB30", "#28C840"] as const;
</script>

<style lang="scss"></style>
