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

export const REG0008020: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008020
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_ELITE = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET §DUMMYN3 = §L_GUIDA
    // #3
    // COND:
    // §DUMMYN3 > #0
    // THEN:
    // *SET §DUMMYN1= #4
    // #4
    // COND:
    // §DUMMYN3 > #300
    // THEN:
    // *SET §DUMMYN1= #5
    // #5
    // COND:
    // §DUMMYN3 > #400
    // THEN:
    // *SET §DUMMYN1= #6
    // #6
    // COND:
    // §DUMMYN3 > #500
    // THEN:
    // *SET §DUMMYN1= #7
    // #7
    // COND:
    // §DUMMYN3 > #600
    // THEN:
    // *SET §DUMMYN1= #8
    // #8
    // THEN:
    // *SET §DUMMYN2 = [§N_MODULI + #1]
    // #9
    // THEN:
    // *SET *CF = [ §DUMMYN1 * §DUMMYN2 ]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_ELITE') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setDUMMYN3(vars.get('§L_GUIDA'));
    
    //#3
    if (vars.get('§DUMMYN3') > 0) {
        vars.setDUMMYN1(4);
    }
    
    //#4
    if (vars.get('§DUMMYN3') > 300) {
        vars.setDUMMYN1(5);
    }
    
    //#5
    if (vars.get('§DUMMYN3') > 400) {
        vars.setDUMMYN1(6);
    }
    
    //#6
    if (vars.get('§DUMMYN3') > 500) {
        vars.setDUMMYN1(7);
    }
    
    //#7
    if (vars.get('§DUMMYN3') > 600) {
        vars.setDUMMYN1(8);
    }
    
    //#8
    vars.setDUMMYN2(vars.get('§N_MODULI') + 1);
    
    //#9
    vars.setCF(vars.get('§DUMMYN1') * vars.get('§DUMMYN2'));
    // GENERATED

    return vars.output;
};
