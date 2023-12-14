class Condition {
    ifCondition: string;
    thenCondition: string;
    elseCondition: string;

    constructor(ifCondition: string, thenCondition: string, elseCondition: string) {
        this.ifCondition = ifCondition;
        this.thenCondition = thenCondition;
        this.elseCondition = elseCondition;
    }
}

class Rule {

    id: string;
    conditions: Condition[];

    constructor(id: string, conditions: Condition[]) {
        this.id = id;
        this.conditions = conditions;
    }
}


class ConversionResult {
    rule: Rule;
    javaScript: string;

    constructor(rule: Rule, javaScript: string) {
        this.rule = rule;
        this.javaScript = javaScript;
    }
}

/**
 * Represents a service for converting rules from one language to another.
 */

export interface RuleConverter {

    /**
     * Converts a rule from one language to another.
     * @param rule - The rule to be converted.
     * @returns A ConversionResult object containing the converted rule.
     */
    convertRule(rule: Rule): ConversionResult;
}/**
 * Represents a data access object for managing rules.
 */

export interface RuleDao {

    /**
     * Retrieves all rules that have not been converted.
     * @returns An array of Rule objects.
     */
    getUnconvertedRules(): Rule[];

    /**
     * Marks a rule as converted.
     * @param rule - The rule to be marked as converted.
     */
    markRuleAsConverted(rule: Rule): void;
}

export { Rule, ConversionResult };
