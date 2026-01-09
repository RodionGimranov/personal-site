<template>
    <div class="flex justify-center items-center gap-0.5 w-11 h-11">
        <span
            v-for="(wave, index) in waveData"
            :key="index"
            class="w-0.75 min-h-0.75 rounded-[100px] bg-primary-white transition-[height] ease-out"
            :style="{ height: `${wave}px` }"
        ></span>
    </div>
</template>

<script setup>
import { ref, onUnmounted, watch, nextTick } from "vue";

const props = defineProps({
    audioElement: Object,
});

const waveData = ref([3, 3, 3, 3, 3, 3]);

let audioContext = null;
let analyser = null;
let dataArray = null;
let source = null;
let animationFrameId = null;

const initializeVisualizer = () => {
    if (props.audioElement) {
        if (audioContext) {
            audioContext.close().catch(console.error);
        }

        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        source = audioContext.createMediaElementSource(props.audioElement);
        source.connect(analyser);
        analyser.connect(audioContext.destination);

        updateWaveData();
    }
};

const updateWaveData = () => {
    if (analyser && !props.audioElement.paused && !props.audioElement.muted) {
        analyser.getByteFrequencyData(dataArray);

        const minHeight = 3;
        const maxHeight = 34;
        const maxFrequencyValue = 255;

        const smoothingFactor = 0.2;
        for (let i = 0; i < waveData.value.length; i++) {
            waveData.value[i] = Math.max(
                minHeight,
                Math.min(
                    maxHeight,
                    waveData.value[i] * (1 - smoothingFactor) +
                        (dataArray[i] / maxFrequencyValue) * maxHeight * smoothingFactor,
                ),
            );
        }

        animationFrameId = requestAnimationFrame(updateWaveData);
    } else {
        waveData.value = waveData.value.map(() => 3);

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    }
};

const handlePlay = () => {
    if (!audioContext) {
        initializeVisualizer();
    } else {
        audioContext.resume().catch(console.error);
        updateWaveData();
    }
};

const handlePauseOrMute = () => {
    updateWaveData();
};

watch(
    () => props.audioElement,
    (newAudioElement) => {
        if (newAudioElement) {
            newAudioElement.addEventListener("play", handlePlay);
            newAudioElement.addEventListener("pause", handlePauseOrMute);
            newAudioElement.addEventListener("ended", handlePauseOrMute);

            nextTick(() => {
                if (!newAudioElement.paused && !newAudioElement.muted) {
                    handlePlay();
                } else {
                    handlePauseOrMute();
                }
            });
        }
    },
    { immediate: true },
);

onUnmounted(() => {
    if (audioContext) {
        audioContext.close().catch(console.error);
    }
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    if (props.audioElement) {
        props.audioElement.removeEventListener("play", handlePlay);
        props.audioElement.removeEventListener("pause", handlePauseOrMute);
        props.audioElement.removeEventListener("ended", handlePauseOrMute);
    }
});
</script>

<style lang="scss"></style>
