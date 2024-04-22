/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general.js";
import { Variables } from "../converter/variables.js";

export const REG0003796: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003796
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_PAS_CAV1_IN_L > #0
    // THEN:
    // *SET *CF=[ §P_PAS_CAV1_IN_L / #100 ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_PAS_CAV1_IN_L') > 0) {
        vars.setCF(vars.get('§P_PAS_CAV1_IN_L') / 100);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
