import * as CSS from 'csstype';

declare function commonElements<T>(arr1: T[], arr2: T[]): T[];

declare function cycleThrough<T>(elements: ReadonlyArray<T>, current: T, direction: 'previous' | 'next' | 'first' | 'last'): T;

declare function nearestNumber(array: number[], targetNumber: number): number;

declare function randomElement<T>(arr: T[]): [T, number];

declare function removeDuplicates<T>(arr: T[]): T[];

declare function averageOfNumbers(arr: number[]): number | undefined;

declare function booleanAsNumber(bool: boolean): 0 | 1;

declare function circumferenceToRadius(circumference: number): number;

declare function countDigits(number: number): number;

declare function degreeToRadian(deg: number): number;

declare function generateRange(length: number, startingNumber?: number, step?: number): number[];

declare function inverseLinearInterpolate(value: number, min: number, max: number): number;

declare function linearInterpolate(percent: number, min: number, max: number): number;

declare function medianOfNumbers(arr: number[]): number | undefined;

declare function radiusToCircumference(radius: number): number;

declare function randomIntegerInRange(min: number, max: number): number;

declare function remapRange(value: number, low1: number, high1: number, low2: number, high2: number): number;

declare function roundNumberToDecimal(num: number, decimalPlaces?: number): number;

declare function smallestPositiveAtDecimal(decimalPlaces: number): number;

declare function truncateNumber(num: number, decimal: number): number;

declare function capitalizeFirstLetter(string: string): string;

declare function fractionGlyphToNumber(char: string): number | undefined;

declare const parseDateString: (dateString: string | string[]) => {
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

declare function stripExtraSpaces(str: string): string;

declare function formatSecondsAsTime(seconds: number): string;

declare function isUUID(uuid: string): boolean;

declare function jsonParseStringify<T>(object: T): object;

declare function promiseWithTimeout<T>(promise: Promise<T>, ms?: number): Promise<T>;

declare function classNames(...classes: (string | undefined)[]): string;

declare function getCookie(name: string): string | undefined;

declare function getCurrentElementRotation(element: Element): number;

declare function keyDownA11y(handler: EventListener | React.EventHandler<React.SyntheticEvent>): (event: KeyboardEvent | React.KeyboardEvent) => void;

interface Style$1 extends CSS.Properties, CSS.PropertiesHyphen {
}
declare const removeCssProperties: (element: HTMLElement, styleProperties: Style$1) => void;

declare function remToPixels(remParam: string): number;

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
declare function setCookie(name: string, value: string | number | boolean, attributes?: Partial<CookieAttributes>): void;

interface Style extends CSS.Properties, CSS.PropertiesHyphen {
}
declare const setCssProperties: (element: HTMLElement, styleProperties: Style) => void;

export { averageOfNumbers, booleanAsNumber, capitalizeFirstLetter, circumferenceToRadius, classNames, commonElements, countDigits, cycleThrough, degreeToRadian, formatSecondsAsTime, fractionGlyphToNumber, generateRange, getCookie, getCurrentElementRotation, inverseLinearInterpolate, isUUID, jsonParseStringify, keyDownA11y, linearInterpolate, medianOfNumbers, nearestNumber, parseDateString, promiseWithTimeout, radiusToCircumference, randomElement, randomIntegerInRange, remToPixels, remapRange, removeCssProperties, removeDuplicates, roundNumberToDecimal, scrollbarWidth, setCookie, setCssProperties, smallestPositiveAtDecimal, stripExtraSpaces, truncateNumber };
