import { IConversionResultDao, IRuleConverterService, IRuleDao } from "../../src/converter/types";
import { ConversionResult, Rule } from "../../src/converter/types";

class RuleConverterMock implements IRuleConverterService {

    convertRule(rule: Rule): ConversionResult {
        return new ConversionResult(rule, rule.id);
    }
}

class RuleDaoMock implements IRuleDao {

    rules: Rule[] = [
        new Rule("1", []),
        new Rule("2", []),
        new Rule("3", []),
        new Rule("4", []),
    ];

    converted: string[] = [];

    getUnconvertedRules(): Rule[] {
        return this.rules.filter(rule => this.converted.indexOf(rule.id) == -1);
    }

    markRuleAsConverted(rule: Rule): void {
        this.converted.push(rule.id);
    }

}

class ConversionResultDaoMock implements IConversionResultDao {

    onSave: (conversionResult: ConversionResult) => void;

    saveConversionResult(conversionResult: ConversionResult): void {
        console.log("saveConversionResult: " + conversionResult)
        this.onSave.apply(conversionResult);
    }
}
