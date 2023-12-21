import * as fs from 'fs';
import * as path from 'path';

/**
 * Removes unnecessary whitespace characters from a given code string.
 * @param code The code string to remove whitespace from.
 * @returns The code string with whitespace characters replaced by a single space.
 */
function removeUnnecessaryChars(code: string) {
    return code.replace(/\s+/g, ' ').trim();
}

function printTargetVariable() {
    const filePath = path.resolve('assets', 'test', 'rules.tsv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');

    let vars: string[] = [];
    for (const line of lines) {
        if (line.includes('*SET')) {
            const targetMatch = line.match(/.+\*SET\s+(.+)=.+/);
            if (targetMatch) {
                const target = targetMatch[1].trim();
                if (!vars.includes(target)) {
                    vars.push(target);
                }
            }
        }
    }
    console.log(vars);

}

export { removeUnnecessaryChars, printTargetVariable }