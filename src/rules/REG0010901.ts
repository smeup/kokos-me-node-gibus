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

export const REG0010901: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010901
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_TETT
    // #2
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET *CON-B = [§L_TET_TS - #6,1]
    // #3
    // COND:
    // §FS_DUCK = §SI
    // THEN:
    // *SET *CON-B = [§L_TET_TS - #5,9]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_TETT'));
    
    //#2
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§L_TET_TS') - 6.1);
    }
    
    //#3
    if (vars.get('§FS_DUCK') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§L_TET_TS') - 5.9);
    }
    
    // GENERATED

    return vars.output;
};
