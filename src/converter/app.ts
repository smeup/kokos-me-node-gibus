import { IRuleConverterService, IRuleDao, IConversionResultDao, Rule, IConversionResultValidator, ConversionResult } from "./types";
import * as fs from 'fs';

class RuleConverterApp {
    ruleDao: IRuleDao;
    ruleConverterService: IRuleConverterService;
    conversionResultValidator: IConversionResultValidator;
    conversionResultDao: IConversionResultDao;


    constructor(ruleDao: IRuleDao, ruleConverterService: IRuleConverterService,
        conversionResultValidator: IConversionResultValidator, conversionResultDao: IConversionResultDao) {
        this.ruleDao = ruleDao;
        this.ruleConverterService = ruleConverterService;
        this.conversionResultValidator = conversionResultValidator;
        this.conversionResultDao = conversionResultDao
    }

    /**
     * Converts all unconverted rules. 
     * Process:
     * - gets all rule to convert from @see IRuleDao.getUnconvertedRules and for each rule it invokes:
     *   - @see IRuleConverterService.convertRule
     *   - @see IConversionResultDao.saveConversionResult
     *   - @see IConversionResultValidator.validateConversionResult
     *   - @see IRuleDao.saveConversionResult
    */
    async convertRules(): Promise<void> {
        console.log("Starting conversion...");
        const startTime = new Date().getTime();
        const rules: Rule[] = await this.ruleDao.getUnconvertedRules();
        const totalRules = rules.length;
        let currentRule = 0;
        for (const rule of rules) {
            currentRule++;
            // if result is null, the rule has not been converted
            const result: ConversionResult | null = await this.convertRule(rule);
            if (result) {
                console.log(`${rule.id} - saving conversion result`);
                this.conversionResultDao.saveConversionResult(result);
                console.log(`${rule.id} - marking rule as converted`);
                await this.ruleDao.markRuleAsConverted(rule);
                console.log(`${rule.id} - successfully converted`);
                console.log(`${currentRule}/${totalRules} rules converted`);
            }
        }
        console.log("Conversion completed");
        console.log(`Total time: ${new Date().getTime() - startTime} ms`);
    }

    /**
     * Converts a rule using different models and returns the conversion result.
     * If the conversion or validation fails, it logs the error and continues with the next rule.
     * @param rule The rule to be converted.
     * @returns A promise that resolves to the conversion result or null if the conversion fails.
     */
    private async convertRule(rule: Rule): Promise<ConversionResult | null> {
        const models = ["gpt-3.5-turbo", "gpt-4"];
        let retry = false;
        for (const model of models) {
            try {
                // retry is used to check if the conversion failed and we should try with the next model
                retry = false;
                console.log(`${rule.id} - converting rule using model ${model}`);
                const result: ConversionResult = await this.ruleConverterService.convertRule(rule, model);
                console.debug(`${rule.id} - conversion result ${result.javaScript}`);
                result.javaScript = this.completeRules(rule, result.javaScript);
                console.log(`${rule.id} - validating conversion result`);
                // retry only if the validation fails
                retry = true;
                await this.conversionResultValidator.validateConversionResult(result);
                return result;
            }
            // Error during conversion or validating are not fatal, we just log the error and continue with the next rule
            catch (error: any) {
                console.error(`${rule.id} - error converting rule ${error.stack}`);
                await this.ruleDao.markRuleAsNotConverted(rule, `${error}`);
                // if I don't have to retry, I return null to mark the rule as not converted
                if (!retry) {
                    return null;
                }
            }
        }
        return null
    }



    /**
     * Completes the body of a rule template implementation by replacing the placeholder "// AI_GENERATED" with the provided function body.
     * 
     * @param rule - The rule to be converted.
     * @param bodyFunctionImpl - The function body to be inserted into the rule template.
     * @returns The completed rule function implementation.
     */
    private completeRules(rule: Rule, bodyFunctionImpl: string): string {
        const ruleTemplate = this.readRuleTemplateFile().replace("TEMPLATE", rule.id);
        return ruleTemplate.replaceAll("// AI_GENERATED", this.indentScript(bodyFunctionImpl));
    }

    private indentScript(script: string): string {
        const lines = script.split("\n");
        const indentedLines = lines.map((line, index) => index > 0 ? `    ${line}` : line);
        return indentedLines.join("\n");
    }

    /**
     * Reads the rule template file from ./src/rules/TEMPLATE.ts and returns its content as a string.
     * 
     * @returns The rule template file content.
     */
    private readRuleTemplateFile(): string {
        const filePath = './src/rules/TEMPLATE.ts';
        const ruleTemplate = fs.readFileSync(filePath, 'utf8');
        return ruleTemplate;
    }
}


export { RuleConverterApp };

// comment to enable console.debug
console.debug = function () { }
