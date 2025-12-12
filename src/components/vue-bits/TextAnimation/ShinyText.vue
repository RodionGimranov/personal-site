<script setup lang="ts">
import { computed } from "vue";

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const props = withDefaults(defineProps<ShinyTextProps>(), {
    text: "",
    disabled: false,
    speed: 5,
    className: "",
});

const animationDuration = computed(() => `${props.speed}s`);
</script>

<template>
    <div
        :class="`text-[#b5b5b5a4] bg-clip-text inline-block ${!props.disabled ? 'animate-shine' : ''} ${props.className}`"
        :style="{
            backgroundImage: 'linear-gradient(120deg, #989898 40%, #ffffff 50%, #989898 60%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            animationDuration: animationDuration,
        }"
    >
        {{ props.text }}
    </div>
</template>

<style scoped>
@keyframes shine {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}

.animate-shine {
    animation: shine linear infinite;
}

div {
    -webkit-text-fill-color: transparent;
}
</style>
