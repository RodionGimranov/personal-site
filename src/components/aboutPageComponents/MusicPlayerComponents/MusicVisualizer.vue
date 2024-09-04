<template>
    <div class="music_visualizer_wrapper">
        <span
            v-for="(wave, index) in waveData"
            :key="index"
            class="music_wave"
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
                        (dataArray[i] / maxFrequencyValue) * maxHeight * smoothingFactor
                )
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
            newAudioElement.addEventListener("volumechange", handlePauseOrMute);

            nextTick(() => {
                if (!newAudioElement.paused && !newAudioElement.muted) {
                    handlePlay();
                } else {
                    handlePauseOrMute();
                }
            });
        }
    },
    { immediate: true }
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
        props.audioElement.removeEventListener("volumechange", handlePauseOrMute);
    }
});
</script>

<style lang="scss">
.music_visualizer_wrapper {
    width: 44px;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
}

.music_wave {
    width: 3px;
    min-height: 3px;

    transition: height 0.2s ease-out;
    border-radius: 100px;
    background: $secondary_red;
}
</style>
