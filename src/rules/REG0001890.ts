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

export const REG0001890: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001890
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_LAME = §SI
    // THEN:
    // *SET *CON-A = §VR_LAME
    // *SET *CON-B = §L_BAN_FRA
    // *SET *CF = §NR_BAN_FRA
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LAME') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VR_LAME'));
        vars.setCON_B(vars.get('§L_BAN_FRA'));
        vars.setCF(vars.get('§NR_BAN_FRA'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
