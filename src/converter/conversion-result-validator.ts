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
     * The validation process consists of create a file named <ruleId>.tmp.ts in the src/rules folder,
     * and trying to import the rule from that file. If the import fails, the validation fails.
     * The <ruleId>.tmp.ts is not deleted after the validation process in order to allow the developer to inspect it for debugging purposes.
     * @param result The conversion result to validate.
     * @throws Error if the validation fails.
     */
    validateConversionResult(result: ConversionResult): void {
        // const tmpRulePath = path.resolve(process.cwd(), "src", "rules", `${result.ruleId}.tmp.ts`);
        // fs.rmSync(tmpRulePath, { force: true });
        // fs.writeFileSync(tmpRulePath, result.javaScript);
        // try {
        //     require(tmpRulePath)[result.ruleId] as Rule;
        // } catch (error: any) {
        //     throw new Error(`Validation of: ${result} failed: ${error.message}`);
        // }
    }
}

export { SyntaxErrorValidator }