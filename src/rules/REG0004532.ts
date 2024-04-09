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

export const REG0004532: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004532
    // REQUEST:
    // """
    // #1
    // COND:
    // §VE_RAC_COND >#0
    // THEN:
    // *SET *CON-A=§VE_VERN_INF
    // *SET *CON-B=§VE_RAC_COND
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VE_RAC_COND') > 0) {
        vars.setCON_A(vars.get('§VE_VERN_INF'));
        vars.setCON_B(vars.get('§VE_RAC_COND'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
