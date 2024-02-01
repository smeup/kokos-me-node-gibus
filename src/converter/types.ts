/**
 * Represents a condition statement in a rule.
 * @property ifCondition - The if condition.
 * @property thenCondition - The then condition.
 * @property elseCondition - The else condition.
 */
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

/**
 * Represents a rule.
 * @property id - The ID of the rule.
 * @property conditions - The conditions of the rule.
 */
class Rule {

    id: string;
    conditions: Condition[];

    constructor(id: string, conditions: Condition[]) {
        this.id = id;
        this.conditions = conditions;
    }
}

/**
 * Represents the result of converting a rule.
 * @property ruleId - The converted rule id.
 * @property javaScript - The JavaScript representation of the rule.
 */
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

export interface IRuleConverterService {

    /**
     * Converts a rule from one language to another.
     * @param rule - The rule to be converted.
     * @returns A promise that resolves to a ConversionResult.
     */
    convertRule(rule: Rule): Promise<ConversionResult>;
}

/**
 * Represents a data access object for managing rules.
 */

export interface IRuleDao {

    /**
     * Retrieves all rules that have not been converted.
     * @returns An array of Rule objects.
     */
    getUnconvertedRules(): Promise<Rule[]>;

    /**
     * Marks a rule as converted.
     * @param rule - The rule to be marked as converted.
     */
    markRuleAsConverted(rule: Rule): Promise<void>;

    /**
     * Marks a as not converted.
     * @param rule The rule to be marked as not converted.
     * @param error The error message.
     */
    markRuleAsNotConverted(rule: Rule, error: string): Promise<void>;
}

/**
 * Represents a validator for conversion results.
 */
export interface IConversionResultValidator {

    /**
     * Validates a conversion result.
     * @throws An error if the conversion result is not valid.
     * @param conversionResult - The conversion result to be validated.
     */
    validateConversionResult(conversionResult: ConversionResult): void;
}

/**
 * Represents a data access object for managing conversion results.
 */
export interface IConversionResultDao {

    /**
     * Saves a conversion result.
     * @param conversionResult - The conversion result to be saved.
     */
    saveConversionResult(conversionResult: ConversionResult): void;
}

export { Rule, ConversionResult, Condition };
