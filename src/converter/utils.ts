import * as fs from 'fs';
import * as path from 'path';
import { RuleConverterAppExamples } from './app.examples';
import { Rule } from '../types/general';
import { getRule } from '../services/RULE';

/**
 * Removes unnecessary whitespace characters and js comments from a given code string.
 * @param code The code string to remove whitespace from.
 * @returns The code string with whitespace characters replaced by a single space.
 */
function removeUnnecessaryChars(code: string) {
    code = removeJavascriptLineComment(code);
    return code.replace(/\s+/g, ' ').trim();
}

function removeJavascriptLineComment(jsCode: string) {
    return jsCode.replace(/\s*\/\/.*/g, '');
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

/**
 * Convert a rule defined in the assets/test/rules.tsv and return the converted rule.
 * @param ruleId The ID of the rule to convert.
 */
async function convertExampleRule(ruleId: string): Promise<Rule> {
    const allow = (myRuleId: string) => myRuleId === ruleId;
    const app = new RuleConverterAppExamples({ allow: allow });
    await app.convertRules();
    const rule = getRule(ruleId);
    return rule;
}

/**
 * Run a function if the OPENAI_API_KEY environment variable is set.
 * @param func The function to run.
 * @param onOpenAIKeyNotSet The function to run if the OPENAI_API_KEY environment variable is not set.
 * @returns The result of the function else nothing.
 */
async function runFunctionIfOpenAIKeySet(
    func: () => any, 
    onOpenAIKeyNotSet: () => void = () => { console.warn("OPENAI_API_KEY environment variable is not set.") }
    ): Promise<any> {
    const openAIKey = process.env.OPENAI_API_KEY;
    if (!openAIKey) {
        onOpenAIKeyNotSet();
    } else {
        return func();
    }
}

/**
 * Checks if the OPENAI_API_KEY environment variable is set.
 * @returns {boolean} True if the OPENAI_API_KEY is set, false otherwise.
 */
function isOpenAIKeySet(): boolean {
    return process.env.OPENAI_API_KEY !== undefined;
}

export { removeUnnecessaryChars, convertExampleRule, runFunctionIfOpenAIKeySet, isOpenAIKeySet }