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

export const REG0004536: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004536
    // REQUEST:
    // """
    // #1
    // COND:
    // §VE_RISC_LATERAL > #0
    // THEN:
    // *SET *CON-A=§VE_VERN
    // *SET *CON-B=§VE_RISC_LATERAL
    // *SET *CF=#2
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VE_RISC_LATERAL') > 0) {
        vars.setCON_A(vars.get('§VE_VERN'));
        vars.setCON_B(vars.get('§VE_RISC_LATERAL'));
        vars.setCF(2);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
