const UNASSIGNED = Symbol('unassigned');

function cycleThrough<T>(elements: ReadonlyArray<T>, current: T, direction: 'previous' | 'next' | 'first' | 'last'): T {
    let returnElement = direction === 'first' ? elements.at(0)! : direction === 'last' ? elements.at(-1)! : UNASSIGNED; // not 'null' or 'undefined' since these could be actual elements I guess

    if (returnElement === UNASSIGNED) {
        const currentIndex = elements.indexOf(current);
        if (currentIndex < 0) throw new Error('Current element not found in array');

        const arrLength = elements.length;
        const offset = direction === 'next' ? 1 : -1;

        const nextIndex = (currentIndex + arrLength + offset) % elements.length;
        returnElement = elements.at(nextIndex)!;
    }

    return returnElement;
}

export default cycleThrough;
