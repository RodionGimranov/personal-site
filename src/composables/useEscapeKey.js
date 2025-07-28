export function useEscapeKeyClose(onCloseCallback) {
    const handleKeydown = (event) => {
        if (event.key === "Escape") {
            if (typeof onCloseCallback === "function") {
                onCloseCallback();
            }
        }
    };

    window.addEventListener("keydown", handleKeydown, true);

    return () => {
        window.removeEventListener("keydown", handleKeydown, true);
    };
}
