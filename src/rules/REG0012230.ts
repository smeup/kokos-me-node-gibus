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

export const REG0012230: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012230
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_FAM2_LUCE = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_PTE_LUC = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FRONTALE_ANT2 > #0
    // THEN:
    // *SET §DUMMYB2 = §SI
    // *SET §DUMMYN1 = #1
    // #5
    // COND:
    // §FRONTALE_ANT3 > #0
    // THEN:
    // *SET §DUMMYB2 = §SI
    // *SET §DUMMYN1 = #2
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_PTE_LUC') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FRONTALE_ANT2') > 0) {
        vars.setDUMMYB2(vars.get('§SI'));
        vars.setDUMMYN1(1);
    }
    
    //#5
    if (vars.get('§FRONTALE_ANT3') > 0) {
        vars.setDUMMYB2(vars.get('§SI'));
        vars.setDUMMYN1(2);
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
