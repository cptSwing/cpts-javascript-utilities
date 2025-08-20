function smallestPositiveAtDecimal(decimalPlaces: number): number {
    let decimated = 1;
    for (let i = 0; i < decimalPlaces; i++) {
        const newDecimated = decimated / 10;
        decimated = parseFloat(newDecimated.toFixed(decimalPlaces));
    }

    return decimated;
}

export default smallestPositiveAtDecimal;
