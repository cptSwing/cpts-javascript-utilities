function linearInterpolate(percent: number, min: number, max: number): number {
    return min + (max - min) * percent;
}

export default linearInterpolate;
