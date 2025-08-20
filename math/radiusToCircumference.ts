function radiusToCircumference(radius: number): number {
    if (radius < 0) {
        throw new Error('Invalid input: Radius cannot be negative.');
    }
    return radius * 2 * Math.PI;
}

export default radiusToCircumference;
