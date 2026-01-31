// Transfer
export function formatTransferText(value: string): string {
    return value.replace(/\n/g, "<br />");
}

// Bold
export function formatBoldText(value: string): string {
    return value.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
}
