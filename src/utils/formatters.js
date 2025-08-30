export function formatText(value) {
    if (typeof value === "string") {
        return value.replace(/\n/g, "<br />");
    }
    return value;
}

export function formatBoldText(value) {
    if (typeof value === "string") {
        return value.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    }
    return value;
}
