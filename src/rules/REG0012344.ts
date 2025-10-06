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

export const REG0012344: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012344
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §TIA1 + §TIA1_1 + §TIA1_2 + §TIA2_1 + §TIA2_2 + §TIB1 + §TIC1 + §TID1 ]
    // #3
    // THEN:
    // *SET §DUMMYN2 = [ §DUMMYN1 +  §TIA2 + §TIB2 + §TIC2 + §TID2 ]
    // #4
    // COND:
    // §TIMP_POLIC_INTE <> §SI
    // THEN:
    // *SET *CF = [ §DUMMYN2 / #100 * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setDUMMYN1(vars.get('§TIA1') + vars.get('§TIA1_1') + vars.get('§TIA1_2') + vars.get('§TIA2_1') + vars.get('§TIA2_2') + vars.get('§TIB1') + vars.get('§TIC1') + vars.get('§TID1'));
    
    //#3
    vars.setDUMMYN2(vars.get('§DUMMYN1') + vars.get('§TIA2') + vars.get('§TIB2') + vars.get('§TIC2') + vars.get('§TID2'));
    
    //#4
    if (vars.get('§TIMP_POLIC_INTE') != vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN2') / 100 * 2);
    }
    
    // GENERATED

    return vars.output;
};
