import { ref, onUnmounted } from "vue";

export function useScrollLock() {
    const isLocked = ref(false);

    const lockScroll = () => {
        if (!isLocked.value) {
            document.body.style.overflow = "hidden";
            isLocked.value = true;
        }
    };

    const unlockScroll = () => {
        if (isLocked.value) {
            document.body.style.overflow = "";
            isLocked.value = false;
        }
    };

    onUnmounted(() => {
        unlockScroll();
    });

    return { isLocked, lockScroll, unlockScroll };
}
