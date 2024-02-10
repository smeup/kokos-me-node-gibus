import { IConversionResultValidator, ConversionResult } from "./types";
import { Rule } from "../types/general";
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import url from "url";

/**
 * Syntax error validator.
 */
class SyntaxErrorValidator implements IConversionResultValidator {

    /**
     * Validates a conversion result.
     * The validation process consists of create a file named <ruleId>.ts in the src/rules folder,
     * and trying to import the rule from that file. If the import fails, the validation fails.
     * The <ruleId>.ts is not deleted after the validation process in order to allow the developer to inspect it for debugging purposes.
     * @param result The conversion result to validate.
     * @throws Error if the validation fails.
     */
    async validateConversionResult(result: ConversionResult): Promise<void> {
        if (process.env.NODE_ENV === "test") {
            return;
        }
        let tmpRulePath = path.resolve(process.cwd(), "src", "rules", `${result.ruleId}.ts`);
        fs.writeFileSync(tmpRulePath, result.javaScript);
        if (os.platform() === "win32") {
            tmpRulePath = url.pathToFileURL(tmpRulePath).toString();
        }
        try {
            await import(tmpRulePath);
        } catch (error) {
            throw new Error(`${result.ruleId}: ${error}`);
        }
    }
}

export { SyntaxErrorValidator }