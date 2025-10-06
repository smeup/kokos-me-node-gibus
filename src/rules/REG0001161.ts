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

export const REG0001161: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001161
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SCRIGNO_300 = §SI AND §FS_ATT_SOFFITTO = §SI
    // THEN:
    // *SET *CON-A = §VERN_CASSONETTO
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SCRIGNO_300') == vars.get('§SI') && vars.get('§FS_ATT_SOFFITTO') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
