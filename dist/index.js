"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  averageOfNumbers: () => averageOfNumbers_default,
  booleanAsNumber: () => booleanAsNumber_default,
  capitalizeFirstLetter: () => capitalizeFirstLetter_default,
  circumferenceToRadius: () => circumferenceToRadius_default,
  classNames: () => classNames_default,
  commonElements: () => commonElements_default,
  countDigits: () => countDigits_default,
  cycleThrough: () => cycleThrough_default,
  degreeToRadian: () => degreeToRadian_default,
  formatSecondsAsTime: () => formatSecondsAsTime_default,
  fractionGlyphToNumber: () => fractionGlyphToNumber_default,
  generateRange: () => generateRange_default,
  getCookie: () => getCookie_default,
  getCurrentElementRotation: () => getCurrentElementRotation_default,
  inverseLinearInterpolate: () => inverseLinearInterpolate_default,
  isUUID: () => isUUID_default,
  jsonParseStringify: () => jsonParseStringify_default,
  keyDownA11y: () => keyDownA11y_default,
  linearInterpolate: () => linearInterpolate_default,
  medianOfNumbers: () => medianOfNumbers_default,
  nearestNumber: () => nearestNumber_default,
  parseDateString: () => parseDateString_default,
  promiseWithTimeout: () => promiseWithTimeout_default,
  radiusToCircumference: () => radiusToCircumference_default,
  randomElement: () => randomElement_default,
  randomIntegerInRange: () => randomIntegerInRange_default,
  remToPixels: () => remToPixels_default,
  remapRange: () => remapRange_default,
  removeCssProperties: () => removeCssProperties_default,
  removeDuplicates: () => removeDuplicates_default,
  roundNumberToDecimal: () => roundNumberToDecimal_default,
  scrollbarWidth: () => scrollbarWidth_default,
  setCookie: () => setCookie_default,
  setCssProperties: () => setCssProperties_default,
  smallestPositiveAtDecimal: () => smallestPositiveAtDecimal_default,
  stripExtraSpaces: () => stripExtraSpaces_default,
  truncateNumber: () => truncateNumber_default
});
module.exports = __toCommonJS(index_exports);

// array/commonElements.ts
function commonElements(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}
var commonElements_default = commonElements;

// array/cycleThrough.ts
var UNASSIGNED = Symbol("unassigned");
function cycleThrough(elements, current, direction) {
  let returnElement = direction === "first" ? elements.at(0) : direction === "last" ? elements.at(-1) : UNASSIGNED;
  if (returnElement === UNASSIGNED) {
    const currentIndex = elements.indexOf(current);
    if (currentIndex < 0) throw new Error("Current element not found in array");
    const arrLength = elements.length;
    const offset = direction === "next" ? 1 : -1;
    const nextIndex = (currentIndex + arrLength + offset) % elements.length;
    returnElement = elements.at(nextIndex);
  }
  return returnElement;
}
var cycleThrough_default = cycleThrough;

// array/nearestNumber.ts
function nearestNumber(array, targetNumber) {
  if (array.length === 0 || !array.every((element) => Number.isFinite(element))) {
    throw new Error("Invalid input: The second parameter must be a non-empty array of numbers.");
  }
  return array.reduce((closest, current) => Math.abs(current - targetNumber) < Math.abs(closest - targetNumber) ? current : closest);
}
var nearestNumber_default = nearestNumber;

// array/randomElement.ts
function randomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return [arr[randomIndex], randomIndex];
}
var randomElement_default = randomElement;

// array/removeDuplicates.ts
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
var removeDuplicates_default = removeDuplicates;

// math/averageOfNumbers.ts
function averageOfNumbers(arr) {
  if (!arr.length) return void 0;
  return arr.reduce((prevNum, curNum) => prevNum + curNum, 0) / arr.length;
}
var averageOfNumbers_default = averageOfNumbers;

// math/booleanAsNumber.ts
function booleanAsNumber(bool) {
  return bool ? 1 : 0;
}
var booleanAsNumber_default = booleanAsNumber;

// math/circumferenceToRadius.ts
function circumferenceToRadius(circumference) {
  if (circumference < 0) {
    throw new Error("Invalid input: Circumference cannot be negative.");
  }
  return circumference / (2 * Math.PI);
}
var circumferenceToRadius_default = circumferenceToRadius;

// math/countDigits.ts
function countDigits(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Invalid input: The provided value is not a number.");
  }
  return number.toString().replace(/-|\./g, "").length;
}
var countDigits_default = countDigits;

// math/degreeToRadian.ts
function degreeToRadian(deg) {
  return Math.PI / 180 * deg;
}
var degreeToRadian_default = degreeToRadian;

// math/generateRange.ts
function generateRange(length, startingNumber = 1, step = 1) {
  return Array.from({ length }, (_, idx) => startingNumber + idx * step);
}
var generateRange_default = generateRange;

// math/inverseLinearInterpolate.ts
function inverseLinearInterpolate(value, min, max) {
  return (value - min) / (max - min);
}
var inverseLinearInterpolate_default = inverseLinearInterpolate;

// math/linearInterpolate.ts
function linearInterpolate(percent, min, max) {
  return min + (max - min) * percent;
}
var linearInterpolate_default = linearInterpolate;

// math/medianOfNumbers.ts
function medianOfNumbers(arr) {
  if (!arr.length) return void 0;
  const s = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}
var medianOfNumbers_default = medianOfNumbers;

// math/radiusToCircumference.ts
function radiusToCircumference(radius) {
  if (radius < 0) {
    throw new Error("Invalid input: Radius cannot be negative.");
  }
  return radius * 2 * Math.PI;
}
var radiusToCircumference_default = radiusToCircumference;

// math/randomIntegerInRange.ts
function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomIntegerInRange_default = randomIntegerInRange;

// math/remapRange.ts
function remapRange(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
var remapRange_default = remapRange;

// math/roundNumberToDecimal.ts
function roundNumberToDecimal(num, decimalPlaces = 2) {
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("Invalid input: The first parameter must be a number.");
  }
  if (!Number.isInteger(decimalPlaces) || decimalPlaces < 0) {
    throw new Error("Invalid input: Decimal places must be a non-negative integer.");
  }
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(num * multiplier) / multiplier;
}
var roundNumberToDecimal_default = roundNumberToDecimal;

// math/smallestPositiveAtDecimal.ts
function smallestPositiveAtDecimal(decimalPlaces) {
  let decimated = 1;
  for (let i = 0; i < decimalPlaces; i++) {
    const newDecimated = decimated / 10;
    decimated = parseFloat(newDecimated.toFixed(decimalPlaces));
  }
  return decimated;
}
var smallestPositiveAtDecimal_default = smallestPositiveAtDecimal;

// math/truncateNumber.ts
function truncateNumber(num, decimal) {
  return parseFloat(num.toFixed(decimal));
}
var truncateNumber_default = truncateNumber;

// string/capitalizeFirstLetter.ts
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var capitalizeFirstLetter_default = capitalizeFirstLetter;

// string/fractionGlyphToNumber.ts
function fractionGlyphToNumber(char) {
  const normalized = char.normalize("NFKD");
  const operands = normalized.split("\u2044");
  if (operands.length === 2 && !isNaN(Number(operands[0])) && !isNaN(Number(operands[1]))) {
    const numerator = parseFloat(operands[0]);
    const denominator = parseFloat(operands[1]);
    return denominator !== 0 ? numerator / denominator : void 0;
  }
  return void 0;
}
var fractionGlyphToNumber_default = fractionGlyphToNumber;

// string/parseDateString.ts
function parseDateString(dateString) {
  if (Array.isArray(dateString)) {
    return { range: "" };
  } else {
    const yearMonthDay = dateString.split("-");
    return { year: yearMonthDay[0], month: yearMonthDay[1], day: yearMonthDay[2] };
  }
}
var parseDateString_default = parseDateString;

// string/stripExtraSpaces.ts
function stripExtraSpaces(str) {
  return str.trim().replace(/\s+/g, " ");
}
var stripExtraSpaces_default = stripExtraSpaces;

// various/formatSecondsAsTime.ts
function formatSecondsAsTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor(seconds % 3600 / 60);
  const secs = Math.floor(seconds % 60);
  return `${padded(hrs)}:${padded(mins)}:${padded(secs)}`;
  function padded(num) {
    return num.toString().padStart(2, "0");
  }
}
var formatSecondsAsTime_default = formatSecondsAsTime;

// various/isUUID.ts
function isUUID(uuid) {
  return uuid.match("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$") === null ? false : true;
}
var isUUID_default = isUUID;

// various/jsonParseStringify.ts
function jsonParseStringify(object) {
  return JSON.parse(JSON.stringify(object));
}
var jsonParseStringify_default = jsonParseStringify;

// various/promiseWithTimeout.ts
function promiseWithTimeout(promise, ms = 1e3) {
  return Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error("Promise timed out after " + ms + "ms")), ms))]);
}
var promiseWithTimeout_default = promiseWithTimeout;

// web/classNames.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var classNames_default = classNames;

// web/getCookie.ts
function getCookie(name) {
  let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : void 0;
}
var getCookie_default = getCookie;

// web/getCurrentElementRotation.ts
function getCurrentElementRotation(element) {
  const style = window.getComputedStyle(element, null);
  const transformMatrix = style.getPropertyValue("-webkit-transform") || style.getPropertyValue("-moz-transform") || style.getPropertyValue("-ms-transform") || style.getPropertyValue("-o-transform") || style.getPropertyValue("transform") || "none";
  if (transformMatrix !== "none") {
    const values = transformMatrix.split("(")[1].split(")")[0].split(",");
    const angle = Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
    return angle;
  }
  return 0;
}
var getCurrentElementRotation_default = getCurrentElementRotation;

// web/keyDownA11y.ts
function keyDownA11y(handler) {
  return function onKeyDown(event) {
    const { key, type } = event;
    const isReactEvent = event.nativeEvent;
    if (["keydown", "keypress"].includes(type) && keys_confirm.includes(key)) {
      if (isReactEvent) {
        handler(event);
      } else {
        handler(event);
      }
    }
  };
}
var keys_confirm = ["Enter", " "];
var keyDownA11y_default = keyDownA11y;

// web/removeCssProperties.ts
function removeCssProperties(element, styleProperties) {
  for (const property in styleProperties) {
    element.style.removeProperty(property);
  }
}
var removeCssProperties_default = removeCssProperties;

// web/remToPixels.ts
function remToPixels(remParam) {
  let returnRem = remParam;
  if (remParam.includes("rem")) returnRem = remParam.replace("rem", "");
  const remNum = parseFloat(returnRem);
  const adjusted = remNum * parseFloat(getComputedStyle(document.documentElement).fontSize);
  return adjusted;
}
var remToPixels_default = remToPixels;

// web/scrollbarWidth.ts
function scrollbarWidth(element) {
  return element.getBoundingClientRect().width - element.scrollWidth;
}
var scrollbarWidth_default = scrollbarWidth;

// web/setCookie.ts
function setCookie(name, value, attributes = {
  path: "/"
}) {
  if (attributes.expires instanceof Date) {
    attributes.expires = attributes.expires.toUTCString();
    if (attributes.expires === "Invalid Date") throw new Error('Invalid Date in "expires" attribute');
  }
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let attributeKey in attributes) {
    updatedCookie += "; " + attributeKey;
    let attributeValue = attributes[attributeKey];
    if (attributeValue !== true) {
      updatedCookie += "=" + attributeValue;
    }
  }
  document.cookie = updatedCookie;
}
var setCookie_default = setCookie;

// web/setCssProperties.ts
function setCssProperties(element, styleProperties) {
  for (const property in styleProperties) {
    const typedProperty = property;
    const value = typeof styleProperties[typedProperty] === "number" ? styleProperties[typedProperty].toString() : styleProperties[typedProperty];
    element.style.setProperty(property, value || null);
  }
}
var setCssProperties_default = setCssProperties;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  averageOfNumbers,
  booleanAsNumber,
  capitalizeFirstLetter,
  circumferenceToRadius,
  classNames,
  commonElements,
  countDigits,
  cycleThrough,
  degreeToRadian,
  formatSecondsAsTime,
  fractionGlyphToNumber,
  generateRange,
  getCookie,
  getCurrentElementRotation,
  inverseLinearInterpolate,
  isUUID,
  jsonParseStringify,
  keyDownA11y,
  linearInterpolate,
  medianOfNumbers,
  nearestNumber,
  parseDateString,
  promiseWithTimeout,
  radiusToCircumference,
  randomElement,
  randomIntegerInRange,
  remToPixels,
  remapRange,
  removeCssProperties,
  removeDuplicates,
  roundNumberToDecimal,
  scrollbarWidth,
  setCookie,
  setCssProperties,
  smallestPositiveAtDecimal,
  stripExtraSpaces,
  truncateNumber
});
