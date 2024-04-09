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

export const REG0012343: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012343
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §TIA + §TIB + §TIC + §TID ]
    // #3
    // THEN:
    // *SET §DUMMYN2 = [ §DUMMYN1 + §TIA1 + §TIA2]
    // #4
    // COND:
    // §TIMP_POLIC_INTE = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN2 / #100 * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setDUMMYN1(vars.get('§TIA') + vars.get('§TIB') + vars.get('§TIC') + vars.get('§TID'));
    
    //#3
    vars.setDUMMYN2(vars.get('§DUMMYN1') + vars.get('§TIA1') + vars.get('§TIA2'));
    
    //#4
    if (vars.get('§TIMP_POLIC_INTE') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN2') / 100 * 2);
    }
    // GENERATED

    return vars.output;
};
