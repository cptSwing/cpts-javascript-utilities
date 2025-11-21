import type * as CSS from 'csstype';
interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

function removeCssProperties(element: HTMLElement, styleProperties: Style) {
    for (const property in styleProperties) {
        element.style.removeProperty(property);
    }
};

export default removeCssProperties;
