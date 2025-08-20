import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const setCssProperties = (element: HTMLElement, styleProperties: Style) => {
    for (const property in styleProperties) {
        const typedProperty = property as keyof Style;

        const value = typeof styleProperties[typedProperty] === 'number' ? styleProperties[typedProperty].toString() : styleProperties[typedProperty];
        element.style.setProperty(property, value || null);
    }
};

export default setCssProperties;
