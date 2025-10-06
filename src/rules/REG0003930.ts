/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { Variables } from "../converter/variables";

export const REG0003930: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003930
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_CAR_TRA_LAM >#0
    // THEN:
    // *SET *CF= §NR_CAR_TRA_LAM
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_CAR_TRA_LAM') > 0) {
        vars.setCF(vars.get('§NR_CAR_TRA_LAM'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
