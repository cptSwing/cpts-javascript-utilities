/* From https://stackoverflow.com/a/38382243 */

function stripExtraSpaces(str: string): string {
    return str.trim().replace(/\s+/g, ' ');
}

export default stripExtraSpaces;
