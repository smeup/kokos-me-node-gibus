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

export const REG0004114: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004114
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §H_ANT_M1 = #0
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §H_ANT_M1=#0 ) AND ( §FS_FAM2_ADDL= §SI ) AND ( §LA_ADD_LAT='SX' )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§H_ANT_M1') == 0) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§H_ANT_M1') == 0) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
