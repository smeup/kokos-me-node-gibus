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

export const REG0007725: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007725
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_JEANS=§SI ) OR ( §FS_FAM2_165=§SI ) OR ( §FS_FAM2_100=§SI )
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) || (vars.get('§FS_FAM2_165') == vars.get('§SI')) || (vars.get('§FS_FAM2_100') == vars.get('§SI'))) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
