function circumferenceToRadius(circumference: number): number {
    if (circumference < 0) {
        throw new Error('Invalid input: Circumference cannot be negative.');
    }
    return circumference / (2 * Math.PI);
}

export default circumferenceToRadius;
