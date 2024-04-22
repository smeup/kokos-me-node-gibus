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

export const REG0008021: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008021
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_TOLO_CL = §SI OR §FS_TOLO_GC = §SI
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_STA_MAG_AGG = §SI
    // ELSE:
    // *SET *LG = ''
    // #4
    // COND:
    // §NR_MAGNETE_AGG > #0
    // THEN:
    // *SET *CF = §NR_MAGNETE_AGG
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_TOLO_CL') == vars.get('§SI') || vars.get('§FS_TOLO_GC') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_STA_MAG_AGG') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§NR_MAGNETE_AGG') > 0) {
        vars.setCF(vars.get('§NR_MAGNETE_AGG'));
    }
    // GENERATED

    return vars.output;
};
