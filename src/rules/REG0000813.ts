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

export const REG0000813: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000813
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_13_QU = §SI OR §FS_11_QUJ = §SI OR §FS_13_QU_GC = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_13_QU') == vars.get('§SI') || vars.get('§FS_11_QUJ') == vars.get('§SI') || vars.get('§FS_13_QU_GC') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
