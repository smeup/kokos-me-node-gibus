import { IRuleConverter, IRuleDao } from "./types";

class RuleConverterApp {
    ruleDao: IRuleDao;
    ruleConverterService: IRuleConverter;

    constructor(ruleDao: IRuleDao, ruleConverterService: IRuleConverter) {
        this.ruleDao = ruleDao;
        this.ruleConverterService = ruleConverterService;
    }

    convertRules(): void {
        const rules = this.ruleDao.getUnconvertedRules();
        for (const rule of rules) {
            const result = this.ruleConverterService.convertRule(rule);
            console.log(`Converted rule ${result.rule.id}`);
            this.ruleDao.markRuleAsConverted(rule);
        }
    }
}

export { RuleConverterApp };
