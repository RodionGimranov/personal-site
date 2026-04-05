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

        const isCmd = isMac ? e.metaKey : e.ctrlKey;

        // Navigation - option / Alt
        if (e.altKey && !e.shiftKey) {
            if (e.code === "Digit1") router.push("/");
            if (e.code === "Digit2") router.push("/about");
            if (e.code === "Digit3") router.push("/projects");
            if (e.code === "Digit4") router.push("/gallery");
        }

        // Actions - shift + command / Ctrl
        if (isCmd && e.shiftKey) {
            if (e.code === "KeyL") {
                e.preventDefault();
                preferencesStore.toggleLocale();
            }

            if (e.code === "KeyS") {
                e.preventDefault();
                preferencesStore.toggleSidebar();
            }
        }

        // modal windows - command / Ctrl
        if (isCmd && !e.shiftKey) {
            // ⌘ + .
            if (e.code === "Period") {
                e.preventDefault();
                modalStore.close("shortcuts");
                modalStore.open("changelog");
            }

            // ⌘ + /
            if (e.code === "Slash") {
                e.preventDefault();
                modalStore.close("changelog");
                modalStore.open("shortcuts");
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
