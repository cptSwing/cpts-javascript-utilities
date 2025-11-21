import * as CSS from 'csstype';

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/array/commonElements.ts|Source @ GitHub}
 */
declare function commonElements<T>(arr1: T[], arr2: T[]): T[];

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/array/cycleThrough.ts|Source @ GitHub}
 */
declare function cycleThrough<T>(elements: ReadonlyArray<T>, current: T, direction: 'previous' | 'next' | 'first' | 'last'): T;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/array/nearestNumber.ts|Source @ GitHub}
 */
declare function nearestNumber(array: number[], targetNumber: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/array/randomElement.ts|Source @ GitHub}
 */
declare function randomElement<T>(arr: T[]): [T, number];

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/array/removeDuplicates.ts|Source @ GitHub}
 */
declare function removeDuplicates<T>(arr: T[]): T[];

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/averageOfNumbers.ts|Source @ GitHub}
 */
declare function averageOfNumbers(arr: number[]): number | undefined;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/booleanAsNumber.ts|Source @ GitHub}
 */
declare function booleanAsNumber(bool: boolean): 0 | 1;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/circumferenceToRadius.ts|Source @ GitHub}
 */
declare function circumferenceToRadius(circumference: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/countDigits.ts|Source @ GitHub}
 */
declare function countDigits(number: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/degreeToRadian.ts|Source @ GitHub}
 */
declare function degreeToRadian(deg: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/generateRange.ts|Source @ GitHub}
 */
declare function generateRange(length: number, startingNumber?: number, step?: number): number[];

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/inverseLinearInterpolate.ts|Source @ GitHub}
 */
declare function inverseLinearInterpolate(value: number, min: number, max: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/linearInterpolate.ts|Source @ GitHub}
 */
declare function linearInterpolate(percent: number, min: number, max: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/medianOfNumbers.ts|Source @ GitHub}
 */
declare function medianOfNumbers(arr: number[]): number | undefined;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/radiusToCircumference.ts|Source @ GitHub}
 */
declare function radiusToCircumference(radius: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/randomIntegerInRange.ts|Source @ GitHub}
 */
declare function randomIntegerInRange(min: number, max: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/remapRange.ts|Source @ GitHub}
 */
declare function remapRange(value: number, low1: number, high1: number, low2: number, high2: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/roundNumberToDecimal.ts|Source @ GitHub}
 */
declare function roundNumberToDecimal(num: number, decimalPlaces?: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/smallestPositiveAtDecimal.ts|Source @ GitHub}
 */
declare function smallestPositiveAtDecimal(decimalPlaces: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/math/truncateNumber.ts|Source @ GitHub}
 */
declare function truncateNumber(num: number, decimal: number): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/string/capitalizeFirstLetter.ts|Source @ GitHub}
 */
declare function capitalizeFirstLetter(string: string): string;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/string/fractionGlyphToNumber.ts|Source @ GitHub}
 */
declare function fractionGlyphToNumber(char: string): number | undefined;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/string/parseDateString.ts|Source @ GitHub}
 */
declare function parseDateString(dateString: string | string[]): {
    range: string;
    year?: undefined;
    month?: undefined;
    day?: undefined;
} | {
    year: string;
    month: string;
    day: string;
    range?: undefined;
};

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/string/stripExtraSpaces.ts|Source @ GitHub}
 */
declare function stripExtraSpaces(str: string): string;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/various/formatSecondsAsTime.ts|Source @ GitHub}
 */
declare function formatSecondsAsTime(seconds: number): string;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/various/isUUID.ts|Source @ GitHub}
 */
declare function isUUID(uuid: string): boolean;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/various/jsonParseStringify.ts|Source @ GitHub}
 */
declare function jsonParseStringify<T>(object: T): object;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/various/promiseWithTimeout.ts|Source @ GitHub}
 */
declare function promiseWithTimeout<T>(promise: Promise<T>, ms?: number): Promise<T>;

/**
 * Joins strings of CSS classnames
 *
 * This enables ternary operations, or short-circuit evaluation for conditional application of classes.
 *
 * @param {...(string | false | undefined | null)[]} classes - Array of strings
 * @returns {string} A concatenated string joining all in `classes`
 * @example
 *
 * const foo = false;
 * const classesString = classNames('class-one', 'class-two', foo && 'class-three'); // 'class-one class-two'
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/web/classNames.ts|Source @ GitHub}
 */
declare function classNames(...classes: (string | false | undefined | null)[]): string;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/web/getCookie.ts|Source @ GitHub}
 */
declare function getCookie(name: string): string | undefined;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/web/getCurrentElementRotation.ts|Source @ GitHub}
 */
declare function getCurrentElementRotation(element: Element): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/web/keyDownA11y.ts|Source @ GitHub}
 */
declare function keyDownA11y(handler: EventListener | React.EventHandler<React.SyntheticEvent>): (event: KeyboardEvent | React.KeyboardEvent) => void;

interface Style$1 extends CSS.Properties, CSS.PropertiesHyphen {
}
/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/web/removeCssProperties.ts|Source @ GitHub}
 */
declare function removeCssProperties(element: HTMLElement, styleProperties: Style$1): void;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/web/remToPixels.ts|Source @ GitHub}
 */
declare function remToPixels(remParam: string): number;

/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/web/scrollbarWidth.ts|Source @ GitHub}
 */
declare function scrollbarWidth(element: HTMLElement): number;

type CookieAttributes = {
    domain: string;
    expires: Date | string;
    'max-age': number;
    partitioned: boolean;
    path: string;
    samesite: 'lax' | 'strict' | 'none';
    secure: boolean;
};
/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/web/setCookie.ts|Source @ GitHub}
 */
declare function setCookie(name: string, value: string | number | boolean, attributes?: Partial<CookieAttributes>): void;

interface Style extends CSS.Properties, CSS.PropertiesHyphen {
}
/**
 *
 * @see {@link https://github.com/cptSwing/cpts-javascript-utilities/blob/main/web/setCssProperties.ts|Source @ GitHub}
 */
declare function setCssProperties(element: HTMLElement, styleProperties: Style): void;

export { averageOfNumbers, booleanAsNumber, capitalizeFirstLetter, circumferenceToRadius, classNames, commonElements, countDigits, cycleThrough, degreeToRadian, formatSecondsAsTime, fractionGlyphToNumber, generateRange, getCookie, getCurrentElementRotation, inverseLinearInterpolate, isUUID, jsonParseStringify, keyDownA11y, linearInterpolate, medianOfNumbers, nearestNumber, parseDateString, promiseWithTimeout, radiusToCircumference, randomElement, randomIntegerInRange, remToPixels, remapRange, removeCssProperties, removeDuplicates, roundNumberToDecimal, scrollbarWidth, setCookie, setCssProperties, smallestPositiveAtDecimal, stripExtraSpaces, truncateNumber };
