export interface ExecuteRulePayload {
  variables: RuleVariableMap;
}

/**
 * Map<String, String> to identity variables rule
 */
export interface RuleVariableMap {
  [key: string]: string;
}

/**
 * Rule is a function
 */
export type Rule = (variables: RuleVariableMap) => RuleVariableMap;

/**
 * The registry of the rules.
 * - Rule name
 * - Rule function
 */
export interface RuleRegistry {
  [key: string]: Rule;
}
