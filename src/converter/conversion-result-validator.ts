import { IConversionResultValidator, ConversionResult } from "./types";
import { Rule, RuleVariableMap } from "../types/general";
import * as fs from 'fs';
import * as path from 'path';

/**
 * Syntax error validator.
 */
class SyntaxErrorValidator implements IConversionResultValidator {

    /**
     * Validates a conversion result.
     * The validation process consists of: require the converted rule and check if it throws an error.
     */
    validateConversionResult(result: ConversionResult): void {
        const tmpRulePath = path.resolve(process.cwd(), "src", "rules", `${result.ruleId}.tmp.ts`);
        fs.rmSync(tmpRulePath, { force: true });
        fs.writeFileSync(tmpRulePath, result.javaScript);
        try {
            require(tmpRulePath)[result.ruleId] as Rule;
        } catch (error: any) {
            throw new Error(`Validation of: ${result} failed: ${error.message}`);
        } finally {
            fs.rmSync(tmpRulePath, { force: true });
        }
    }
}

export { SyntaxErrorValidator }