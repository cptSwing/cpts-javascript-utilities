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
 *
 */
function classNames(...classes: (string | false | undefined | null)[]): string {
    return classes.filter(Boolean).join(' ');
}

export default classNames;
