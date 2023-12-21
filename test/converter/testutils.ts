
/**
 * Removes unnecessary whitespace characters from a given code string.
 * @param code The code string to remove whitespace from.
 * @returns The code string with whitespace characters replaced by a single space.
 */
function removeUnnecessaryChars(code: string) {
    return code.replace(/\s+/g, ' ').trim();
}

export { removeUnnecessaryChars }