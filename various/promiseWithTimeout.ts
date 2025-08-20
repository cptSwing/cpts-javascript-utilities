function promiseWithTimeout<T>(promise: Promise<T>, ms = 1000): Promise<T> {
    return Promise.race([promise, new Promise<T>((_, reject) => setTimeout(() => reject(new Error('Promise timed out after ' + ms + 'ms')), ms))]);
}

export default promiseWithTimeout;
