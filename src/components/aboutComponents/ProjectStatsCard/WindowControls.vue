<template>
    <div class="flex justify-start items-center w-full px-5! py-3! bg-fourth-dark">
        <div class="flex justify-start items-center gap-1.75">
            <span
                v-for="(color, index) in colors"
                :key="index"
                class="w-3 h-3 rounded-[100px]"
                :style="{ backgroundColor: color }"
            ></span>
        </div>
    </div>
</template>

<script setup>
const colors = ["#FF6057", "#FFBB30", "#28C840"];
</script>

<style lang="scss"></style>
