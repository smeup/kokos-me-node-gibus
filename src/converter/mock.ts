import { RuleConverterApp } from "./app";
import { RuleConverter, RuleDao } from "./interface";
import { ConversionResult, Rule } from "./model";

class RuleConverterMock implements RuleConverter {

    convertRule(rule: Rule): ConversionResult {
        return new ConversionResult(rule.id, rule.script);
    }
}

class RuleDaoMock implements RuleDao {

    rules: Rule[] = [
        new Rule("1", "function foo() { return 1; }"),
        new Rule("2", "function bar() { return 2; }"),
        new Rule("3", "function baz() { return 3; }"),
        new Rule("4", "function baz() { return 4; }"),
        new Rule("5", "function baz() { return 5; }")
    ];

    converted: string[] = [];

    getUnconvertedRules(): Rule[] {
        return this.rules.filter(rule => this.converted.indexOf(rule.id) != -1);
    }

    markRuleAsConverted(rule: Rule): void {
        this.converted.push(rule.id);
    }

}

new RuleConverterApp(new RuleDaoMock(), new RuleConverterMock()).convertRules();


