# cpts-javascript-utilities
Common helper functions in javascript

[x] Add all my js/ts snippets from VSCode
[ ] Or rather compile down to JS as needed? Does this help? https://tofusoup429.medium.com/how-to-make-your-own-npm-package-with-typescript-d-ts-extension-57e664223e96



## Array

#### commonElements

Get intersecting elements from two arrays

#### cycleThrough

Walk through an array via 'next', 'previous' etc

#### nearestNumber

Returns the closest number to the one supplied

#### randomElement

#### removeDuplicates



## Math

#### averageOfNumbers

#### booleanAsNumber

Returns true as 1.0, false as 0.0 (used for feeding glsl shaders, for instance)

#### circumferenceToRadius

#### countDigits

12.34 = 4

#### degreeToRadian

#### generateRange

..of numbers. Default [1, 2, 3, ...]

#### inverseLinearInterpolate

Maps a value from a range back to [0, 1].

#### linearInterpolate

Maps a normalized value [0, 1] to a range

#### medianOfNumbers

#### radiusToCircumference

#### randomIntegerInRange

#### remapRange

Map a value in [low1 - high1] to [low2 - high2]

#### roundNumberToDecimal

#### smallestPositiveAtDecimal

Returns 0.0001 at decimal 4, 0.0000001 at 7, etc.

#### truncateNumber



## String

#### capitalizeFirstLetter

#### fractionGlyphToNumber

Converts 1/4 strings to 0.25, for example.

#### parseDateString

#### stripExtraSpaces

Remove leading spaces, trailing spaces, and multiple spaces in a string



## Web

#### classNames

Joins strings of classes (used to conditionally set classes)

#### getCookie

#### getCurrentElementRotation

#### keyDownA11y

Pass an onclick callback (react or vanilla) to an onkeydown handler

#### removeCssProperties (see above)

#### remToPixels

#### scrollbarWidth

#### setCookie

#### setCssProperties (WIP fix types)



## various

#### formatSecondsAsTime

Returns a HH:MM:SS string from seconds.

#### isUUID

Checks whether given string is of UUID format

#### jsonParseStringify

Serializes a copy of the given object/array etc. via JSON

#### promiseWithTimeout

Rejects if resolving a supplied promise takes longer than x milliseconds
