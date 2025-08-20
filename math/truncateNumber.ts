function truncateNumber(num: number, decimal: number): number {
    return parseFloat(num.toFixed(decimal));
}

export default truncateNumber;
