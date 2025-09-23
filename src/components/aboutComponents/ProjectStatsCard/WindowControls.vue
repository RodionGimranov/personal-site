<template>
    <div class="window_controls_container">
        <div class="window_controls_btn">
            <div
                v-for="(color, index) in colors"
                :key="index"
                class="controls_btn"
                :style="{ backgroundColor: color }"
            ></div>
        </div>
    </div>
</template>

<script setup>
const colors = ["#FF6057", "#FFBB30", "#28C840"];
</script>

<style lang="scss">
.window_controls_container {
    width: 100%;
    padding: 12px 20px;
    background: $fourth_dark;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.window_controls_btn {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
}

.controls_btn {
    width: 12px;
    height: 12px;
    border-radius: 100px;
}
</style>
