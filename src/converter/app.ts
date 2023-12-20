import { IRuleConverterService, IRuleDao, IConversionResultDao } from "./types";
import * as fs from 'fs';

class RuleConverterApp {
    ruleDao: IRuleDao;
    ruleConverterService: IRuleConverterService;
    conversionResultDao: IConversionResultDao;

    constructor(ruleDao: IRuleDao, ruleConverterService: IRuleConverterService, conversionResultDao: IConversionResultDao) {
        this.ruleDao = ruleDao;
        this.ruleConverterService = ruleConverterService;
        this.conversionResultDao = conversionResultDao
    }

    /**
     * Converts all unconverted rules. 
     * Process:
     * - gets all rule to convert from @see IRuleDao.getUnconvertedRules and for each rule it invokes:
     *   - @see IRuleConverterService.convertRule
     *   - @see IConversionResultDao.saveConversionResult
     *   - @see IRuleDao.saveConversionResult
     *   - 
    */
    async convertRules(): Promise<void> {
        const rules = this.ruleDao.getUnconvertedRules();
        for (const rule of rules) {
            try {
                console.log(`${rule.id} - converting rule`);
                const result = await this.ruleConverterService.convertRule(rule);
                console.log(`${rule.id} - conversion result ${result.javaScript}`);
                result.javaScript = completeRules(result.javaScript);
                console.log(`${rule.id} - saving conversion result ${result.javaScript}`);
                this.conversionResultDao.saveConversionResult(result);
                console.log(`${rule.id} - marking rule as converted`);
                this.ruleDao.markRuleAsConverted(rule);
                console.log(`${rule.id} - successfully converted`);
            } catch (error) {
                console.error(`${rule.id} - error converting rule ${error}`);
                this.ruleDao.markRuleAsNotConverted(rule, `${error}`);
            }
        }
    }
}


/**
 * Completes the body of a rule template implementation by replacing the placeholder "// AI_GENERATED" with the provided function body.
 * 
 * @param bodyFunctionImpl - The function body to be inserted into the rule template.
 * @returns The completed rule function implementation.
 */
function completeRules(bodyFunctionImpl: string): string {
    const ruleTemplate = readRuleTemplateFile();
    return ruleTemplate.replaceAll("// AI_GENERATED", bodyFunctionImpl);
}


/**
 * Reads the rule template file from ./src/rules/TEMPLATE.ts and returns its content as a string.
 * 
 * @returns The rule template file content.
 */
function readRuleTemplateFile(): string {
    const filePath = './src/rules/TEMPLATE.ts';
    const ruleTemplate = fs.readFileSync(filePath, 'utf8');
    return ruleTemplate;
}


export { RuleConverterApp, completeRules, readRuleTemplateFile };
