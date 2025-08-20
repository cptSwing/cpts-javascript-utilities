function formatSecondsAsTime(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${padded(hrs)}:${padded(mins)}:${padded(secs)}`;

    function padded(num: number) {
        return num.toString().padStart(2, '0');
    }
}

export default formatSecondsAsTime;
