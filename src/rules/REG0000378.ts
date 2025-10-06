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

export const REG0000378: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000378
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_FRANGITRATTA = §SI
    // THEN:
    // *SET *CON-A = §VERN_CASSONETTO
    // *SET *CF = §NR_FRANG_AGG
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_SLIDE = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_FRANGITRATTA') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
        vars.setCF(vars.get('§NR_FRANG_AGG'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_SLIDE') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
