function fractionGlyphToNumber(char: string): number | undefined {
    const normalized = char.normalize('NFKD');
    const operands = normalized.split('⁄');

    if (operands.length === 2 && !isNaN(Number(operands[0])) && !isNaN(Number(operands[1]))) {
        const numerator = parseFloat(operands[0]);
        const denominator = parseFloat(operands[1]);

        return denominator !== 0 ? numerator / denominator : undefined;
    }

    return undefined;
}

export default fractionGlyphToNumber;
