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

export const REG0010485: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010485
    // REQUEST:
    // """
    // #1
    // COND:
    // §VE_GUIINF_3VIE > #0 AND §FS_VET_SCORR = §SI
    // THEN:
    // *SET *CON-A = '0051'
    // *SET *CON-B = §VE_GUIINF_3VIE
    // *SET *CF = §VE_QGUIINF_3VIE
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VE_GUIINF_3VIE') > 0 && vars.get('§FS_VET_SCORR') == vars.get('§SI')) {
        vars.setCON_A('0051');
        vars.setCON_B(vars.get('§VE_GUIINF_3VIE'));
        vars.setCF(vars.get('§VE_QGUIINF_3VIE'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
