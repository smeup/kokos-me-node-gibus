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
        const rulePath = path.resolve(process.cwd(), "src", "rules", `${result.ruleId}.ts`);
        fs.writeFileSync(rulePath, result.javaScript);
        const currentTimeMillis = Date.now();
        let tempRulePath = path.resolve(process.cwd(), "src", "rules", `${result.ruleId}.${currentTimeMillis}.ts`);
        fs.writeFileSync(tempRulePath, result.javaScript);
        try {
            if (os.platform() === "win32") {
                await import(url.pathToFileURL(tempRulePath).toString());
            } else {
                await import(tempRulePath);
            }
        } catch (error) {
            throw new Error(`${result.ruleId}: ${error}`);
        } finally {
            if (tempRulePath) {
                fs.rmSync(tempRulePath, { force: true }); // Delete the file using the file path
            }
        }
    }
}

export { SyntaxErrorValidator }