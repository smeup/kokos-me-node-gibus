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

export const REG0002308: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002308
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MOT_MED = §SI OR §FS_MOT_CP = §SI OR §FS_TENDA_FINEST = §SI OR §FS_TENDA_CADUTA = §SI OR §FS_MOT_VEL = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MOT_MED') == vars.get('§SI') || vars.get('§FS_MOT_CP') == vars.get('§SI') || vars.get('§FS_TENDA_FINEST') == vars.get('§SI') || vars.get('§FS_TENDA_CADUTA') == vars.get('§SI') || vars.get('§FS_MOT_VEL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
