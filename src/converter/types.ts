class Rule {
    id: string;
    script: string;

    constructor(id: string, script: string) {
        this.id = id;
        this.script = script;
    }
}


class ConversionResult {
    ruleId: string;
    javaScript: string;

    constructor(ruleId: string, javaScript: string) {
        this.ruleId = ruleId;
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
