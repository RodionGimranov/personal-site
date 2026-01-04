import { ref, onUnmounted, watch } from "vue";

export function useScrollToTop(scrollElRef, options = {}) {
    const { showAfter = 300 } = options;

    const isVisible = ref(false);

    const onScroll = () => {
        if (!scrollElRef.value) return;
        isVisible.value = scrollElRef.value.scrollTop > showAfter;
    };

    const scrollToTop = () => {
        scrollElRef.value?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const attach = (el) => {
        if (!el) return;
        onScroll();
        el.addEventListener("scroll", onScroll, { passive: true });
    };

    const detach = (el) => {
        el?.removeEventListener("scroll", onScroll);
    };

    watch(
        scrollElRef,
        (newEl, oldEl) => {
            detach(oldEl);
            attach(newEl);
        },
        { immediate: true },
    );

    onUnmounted(() => {
        detach(scrollElRef.value);
    });

    return {
        isVisible,
        scrollToTop,
    };
}
