const removeCssProperties = (element: HTMLElement, styleProperties: AnimationProperties) => {
    for (const property in styleProperties) {
        element.style.removeProperty(property);
    }
};

export default removeCssProperties;
