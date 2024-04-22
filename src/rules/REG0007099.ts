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

export const REG0007099: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007099
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [§NR_CAN_SLA * #4]
    // #2
    // COND:
    // §NR_MOL_CAN_CAV > #0
    // THEN:
    // *SET *CF = §NR_MOL_CAN_CAV
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_CAN_SLA') * 4);
    
    //#2
    if (vars.get('§NR_MOL_CAN_CAV') > 0) {
        vars.setCF(vars.get('§NR_MOL_CAN_CAV'));
    }
    // GENERATED

    return vars.output;
};
