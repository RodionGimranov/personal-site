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

<script setup lang="ts">
import { ref, watch, nextTick, onUnmounted } from "vue";

type Props = {
    audioElement: HTMLAudioElement | null;
};

const props = defineProps<Props>();

const waveData = ref<number[]>([3, 3, 3, 3, 3, 3]);

let audioContext: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let dataArray: Uint8Array<ArrayBuffer> | null = null;
let source: MediaElementAudioSourceNode | null = null;
let animationFrameId: number | null = null;

const resetWaves = (): void => {
    waveData.value = waveData.value.map(() => 3);
};

const stopAnimation = (): void => {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
};

const getAudioContextCtor = (): typeof AudioContext => {
    return (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext;
};

const initializeVisualizer = (): void => {
    const audio = props.audioElement;
    if (!audio) return;

    if (audioContext) {
        audioContext.close().catch(console.error);
    }

    const Ctx = getAudioContextCtor();
    audioContext = new Ctx();

    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;

    const bufferLength = analyser.frequencyBinCount;

    dataArray = new Uint8Array(new ArrayBuffer(bufferLength));

    source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    updateWaveData();
};

const updateWaveData = (): void => {
    const audio = props.audioElement;

    if (!audio || !analyser || !dataArray) {
        resetWaves();
        stopAnimation();
        return;
    }

    if (!audio.paused && !audio.muted) {
        analyser.getByteFrequencyData(dataArray);

        const minHeight = 3;
        const maxHeight = 34;
        const maxFrequencyValue = 255;
        const smoothingFactor = 0.2;

        for (let i = 0; i < waveData.value.length; i++) {
            const freq = dataArray[i] ?? 0;
            const prev = waveData.value[i] ?? minHeight;

            const target = (freq / maxFrequencyValue) * maxHeight;

            waveData.value[i] = Math.max(
                minHeight,
                Math.min(maxHeight, prev * (1 - smoothingFactor) + target * smoothingFactor),
            );
        }

        animationFrameId = requestAnimationFrame(updateWaveData);
    } else {
        resetWaves();
        stopAnimation();
    }
};

const handlePlay = (): void => {
    if (!audioContext) {
        initializeVisualizer();
        return;
    }

    audioContext.resume().catch(console.error);
    updateWaveData();
};

const handlePauseOrMute = (): void => {
    updateWaveData();
};

watch(
    () => props.audioElement,
    (newAudio, oldAudio) => {
        if (oldAudio) {
            oldAudio.removeEventListener("play", handlePlay);
            oldAudio.removeEventListener("pause", handlePauseOrMute);
            oldAudio.removeEventListener("ended", handlePauseOrMute);
        }

        if (!newAudio) return;

        newAudio.addEventListener("play", handlePlay);
        newAudio.addEventListener("pause", handlePauseOrMute);
        newAudio.addEventListener("ended", handlePauseOrMute);

        nextTick(() => {
            if (!newAudio.paused && !newAudio.muted) {
                handlePlay();
            } else {
                handlePauseOrMute();
            }
        });
    },
    { immediate: true },
);

onUnmounted(() => {
    stopAnimation();

    if (props.audioElement) {
        props.audioElement.removeEventListener("play", handlePlay);
        props.audioElement.removeEventListener("pause", handlePauseOrMute);
        props.audioElement.removeEventListener("ended", handlePauseOrMute);
    }

    if (audioContext) {
        audioContext.close().catch(console.error);
        audioContext = null;
    }

    analyser = null;
    dataArray = null;
    source = null;
});
</script>

<style lang="scss"></style>
