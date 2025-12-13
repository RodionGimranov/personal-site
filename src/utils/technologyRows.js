export function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

export function splitIntoRows(items, rowsCount) {
    const rows = Array.from({ length: rowsCount }, () => []);

    items.forEach((item, index) => {
        rows[index % rowsCount].push(item);
    });

    return rows;
}

export function prepareTechnologyRows(technologies, rowsCount) {
    const shuffled = shuffleArray(technologies);
    const rows = splitIntoRows(shuffled, rowsCount);

    return rows.map((row) => [...row, ...row]);
}
