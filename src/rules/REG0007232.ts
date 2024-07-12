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

export const REG0007232: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007232
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_MON_POS_1=§NO ) AND ( §TI_ANG_POS1='01' )
    // THEN:
    // *SET *CF=#1
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_MON_POS_1') == vars.get('§NO')) && (vars.get('§TI_ANG_POS1') == '01')) {
        vars.setCF(1);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
