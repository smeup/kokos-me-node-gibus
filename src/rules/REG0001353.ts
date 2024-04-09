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

export const REG0001353: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001353
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SQUA_ATT_POS = §SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = §NR_SQUA_ATT_POS
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SQUA_ATT_POS') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCF(vars.get('§NR_SQUA_ATT_POS'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
