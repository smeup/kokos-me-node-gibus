import { RuleVariableMap } from "types/general.js";
import { Variables } from "../converter/variables.js";


/***
 * This callback is called after any rule has been applied
 * @param ruleName The name of the rule to interpret
 * @param input The input variables
 */
function beforeRuleApplied(ruleName: string, input: RuleVariableMap) {
    if (ruleName == "TEST_CALLBACK") {
        input["D§COEF"] = input["D§COEF"] || 0;
    }
}

/***
 * This callback contains the default rule implementation, when the rule is not found.
 * @param ruleName The name of the rule to interpret
 * @param vars The variables object
 */
function defaultRuleImplementation(ruleName: string, vars: Variables) {
    const cfValue = vars.get("§_CF");
    if (cfValue !== undefined) {
        const cfNumber = Number(cfValue);
        if (!isNaN(cfNumber)) {
            vars.setCF(cfNumber);
        }
    }
}

/***
 * This callback is called after any rule has been applied
 * @param ruleName The name of the rule to interpret
 * @param vars The variables object
 */
function afterRuleApplied(ruleName: string, vars: Variables) {
    console.log(`afterRuleApplied - ruleName ${ruleName}`);
}

export { afterRuleApplied, defaultRuleImplementation, beforeRuleApplied };