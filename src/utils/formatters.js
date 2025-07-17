export function formatText(value) {
    if (typeof value === "string") {
        return value.replace(/\n/g, "<br />");
    }
    return value;
}
