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

export const REG0006516: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006516
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_PLAST
    // #2
    // COND:
    // §FS_DUCK = §SI
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_COM_ARGANO = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §TI_OCC <> ''
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#2
    if (vars.get('§FS_DUCK') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_COM_ARGANO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§TI_OCC') != '') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
