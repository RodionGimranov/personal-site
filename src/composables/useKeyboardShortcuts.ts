import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

import { useModalStore } from "@/stores/useModalStore";
import { usePreferencesStore } from "@/stores/usePreferencesStore";

export function useKeyboardShortcuts() {
    const router = useRouter();

    const modalStore = useModalStore();
    const preferencesStore = usePreferencesStore();

    const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.repeat) return;

        const isTyping =
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement ||
            (e.target as HTMLElement)?.isContentEditable;

        if (isTyping) return;

        if (e.altKey && !e.shiftKey) {
            if (e.code === "Digit1") router.push("/");
            if (e.code === "Digit2") router.push("/about");
            if (e.code === "Digit3") router.push("/projects");
            if (e.code === "Digit4") router.push("/gallery");
        }

        if (e.altKey && e.shiftKey) {
            if (e.altKey && e.shiftKey) {
                if (e.code === "KeyL") {
                    preferencesStore.toggleLocale();
                }
            }

            if (e.code === "KeyK") {
                modalStore.close("changelog");
                modalStore.open("shortcuts");
            }

            if (e.code === "KeyC") {
                modalStore.close("shortcuts");
                modalStore.open("changelog");
            }
        }
    };

    onMounted(() => {
        window.addEventListener("keydown", handleKeydown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("keydown", handleKeydown);
    });

    return {
        isMac,
    };
}
