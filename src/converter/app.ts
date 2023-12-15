import { IRuleConverterService, IRuleDao, IConversionResultDao } from "./types";

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
     * - gets all rule to convert from @see IRuleDao.getUnconvertedRules and for each rule it invkes:
     *   - @see IRuleConverterService.convertRule
     *   - @see IConversionResultDao.saveConversionResult
     *   - @see IRuleDao.saveConversionResult
     *   - 
    */
    convertRules(): void {
        const rules = this.ruleDao.getUnconvertedRules();
        for (const rule of rules) {
            console.log(`${rule.id} - converting rule`);
            const result = this.ruleConverterService.convertRule(rule);
            console.log(`${rule.id} - saving conversion result ${result.javaScript}`);
            this.conversionResultDao.saveConversionResult(result);
            console.log(`${rule.id} - marking rule as converted`);
            this.ruleDao.markRuleAsConverted(rule);
        }
    }
}

export { RuleConverterApp };
