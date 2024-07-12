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

export const REG0008650: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008650
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #2
    // *SET *CON-A = §VERN_1_COM
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §NR_FRANGI - §NR_LAM_FIS ]
    // #3
    // THEN:
    // *SET *CON-B = [ §DUMMYN1 * #20 - #14 ]
    // #4
    // COND:
    // §FS_NO_COM = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(2);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    vars.setDUMMYN1(vars.get('§NR_FRANGI') - vars.get('§NR_LAM_FIS'));
    
    //#3
    vars.setCON_B(vars.get('§DUMMYN1') * 20 - 14);
    
    //#4
    if (vars.get('§FS_NO_COM') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
