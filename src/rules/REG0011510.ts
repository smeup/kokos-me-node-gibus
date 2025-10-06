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

export const REG0011510: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011510
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *NT = §PD_NT_LU_GC
    // #2
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = [ §ALTE_TC + §AUM_GUI_SX ]
    // *SET §DUMMYN2 = [ §ALTE_TC + §AUM_GUI_DX ]
    // #3
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 ]
    // #4
    // COND:
    // §DUMMYN2 > §DUMMYN1
    // THEN:
    // *SET *CF = [ §DUMMYN2 / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setNT(vars.get('§PD_NT_LU_GC'));
    
    //#2
    vars.setCF(0);
    vars.setDUMMYN1(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_SX'));
    vars.setDUMMYN2(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_DX'));
    
    //#3
    vars.setCF(vars.get('§DUMMYN1') / 100);
    
    //#4
    if (vars.get('§DUMMYN2') > vars.get('§DUMMYN1')) {
        vars.setCF(vars.get('§DUMMYN2') / 100);
    }
    // GENERATED

    return vars.output;
};
