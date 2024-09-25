import { Variables } from "converter/variables";
import { RuleVariableMap } from "types/general";

function afterRuleApplied(ruleName: string, vars: Variables): RuleVariableMap {
    console.log(`Rule ${ruleName} applied`);
    return vars.output;
}

export { afterRuleApplied };