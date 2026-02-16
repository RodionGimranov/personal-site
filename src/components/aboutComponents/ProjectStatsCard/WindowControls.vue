<template>
    <div class="bg-fourth-dark flex w-full items-center justify-start px-5! py-3!">
        <div class="flex items-center justify-start gap-1.75">
            <span
                v-for="color in colors"
                :key="color"
                class="h-3 w-3 rounded-[100px]"
                :style="{ backgroundColor: color }"
            ></span>
        </div>
    </div>
</template>

<script setup lang="ts">
const colors = ["#FF6057", "#FFBB30", "#28C840"] as const;
</script>

<style lang="scss"></style>
