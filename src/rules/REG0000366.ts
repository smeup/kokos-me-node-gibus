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

export const REG0000366: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000366
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_ZEROGRADI = §SI) AND (§SPOR > #300)
    // THEN:
    // *SET *CF = #1
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_CAV_ZER = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_ZEROGRADI') == vars.get('§SI')) && (vars.get('§SPOR') > 300)) {
        vars.setCF(1);
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§FS_CAV_ZER') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
