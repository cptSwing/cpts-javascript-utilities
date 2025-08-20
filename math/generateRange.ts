function generateRange(length: number, startingNumber = 1, step = 1): number[] {
    return Array.from({ length }, (_, idx) => startingNumber + idx * step);
}

export default generateRange;
