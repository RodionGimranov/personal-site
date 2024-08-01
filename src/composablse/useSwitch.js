import { ref, onMounted, onUnmounted, computed } from "vue";

export function useSwitch(items) {
    const currentIndex = ref(0);

    const switchItem = () => {
        currentIndex.value = (currentIndex.value + 1) % items.length;
    };

    let intervalId = null;

    onMounted(() => {
        intervalId = setInterval(switchItem, 5000);
    });

    onUnmounted(() => {
        clearInterval(intervalId);
    });

    return {
        switchItem,
        currentIndex,
        currentItem: computed(() => items[currentIndex.value]),
    };
}
