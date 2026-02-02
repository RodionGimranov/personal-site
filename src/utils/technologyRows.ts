export function shuffleArray<T>(array: readonly T[]): T[] {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i]!, result[j]!] = [result[j]!, result[i]!];
    }

    return result;
}

export function splitIntoRows<T>(items: readonly T[], rowsCount: number): T[][] {
    if (rowsCount <= 0) return [];

    const rows: T[][] = Array.from({ length: rowsCount }, () => []);

    items.forEach((item, index) => {
        const rowIndex = index % rowsCount;
        rows[rowIndex]!.push(item);
    });

    return rows;
}

export function prepareTechnologyRows<T>(technologies: readonly T[], rowsCount: number): T[][] {
    const shuffled = shuffleArray(technologies);
    const rows = splitIntoRows(shuffled, rowsCount);

    return rows.map((row) => [...row, ...row]);
}
