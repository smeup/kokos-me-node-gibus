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

export const REG0001049: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001049
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZEROGRADI = §SI AND §FS_ZIP = §SI
    // THEN:
    // *SET *CON-A = §VERN_CASSONETTO
    // *SET *CON-B = [§SPOR - #20]
    // *SET *CF = #4
    // *SET *LG = ''
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && vars.get('§FS_ZIP') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
        vars.setCON_B(vars.get('§SPOR') - 20);
        vars.setCF(4);
        vars.setLG('');
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
