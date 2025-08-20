function scrollbarWidth(element: HTMLElement): number {
    return element.getBoundingClientRect().width - element.scrollWidth;
}

export default scrollbarWidth;
