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

export const REG0003293: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003293
    // REQUEST:
    // """
    // #1
    // COND:
    // §LARG_M3 > #0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§LARG_M3') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
