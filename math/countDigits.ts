function countDigits(number: number): number {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('Invalid input: The provided value is not a number.');
    }

    return number.toString().replace(/-|\./g, '').length;
}

export default countDigits;
