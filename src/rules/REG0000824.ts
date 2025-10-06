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

export const REG0000824: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000824
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_13_QU = §SI
    // THEN:
    // *SET *CF = [§LARG / #100]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_13_QU') == vars.get('§SI')) {
        vars.setCF(vars.get('§LARG') / 100);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
