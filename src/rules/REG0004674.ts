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

export const REG0004674: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004674
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1= [ §LARG + §SPOR ]
    // #2
    // COND:
    // §DUMMYN1 >#900
    // THEN:
    // *SET *CF=#1
    // ELSE:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§LARG') + vars.get('§SPOR'));
    
    //#2
    if (vars.get('§DUMMYN1') > 900) {
        vars.setCF(1);
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
