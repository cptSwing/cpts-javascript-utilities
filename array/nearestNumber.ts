function nearestNumber(array: number[], targetNumber: number): number {
    if (array.length === 0 || !array.every((element) => Number.isFinite(element))) {
        throw new Error('Invalid input: The second parameter must be a non-empty array of numbers.');
    }
    return array.reduce((closest, current) => (Math.abs(current - targetNumber) < Math.abs(closest - targetNumber) ? current : closest));
}

export default nearestNumber;
