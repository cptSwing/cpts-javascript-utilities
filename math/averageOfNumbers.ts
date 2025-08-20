function averageOfNumbers(arr: number[]): number | undefined {
    if (!arr.length) return undefined;
    return arr.reduce((prevNum, curNum) => prevNum + curNum, 0) / arr.length;
}

export default averageOfNumbers;
