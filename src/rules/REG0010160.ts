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

export const REG0010160: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010160
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §SBALZO_DX_FS > #0 AND §FS_LED_LAT_DX = §SI
    // THEN:
    // *SET *CF = [§POS_PRI_LED + #1]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§SBALZO_DX_FS') > 0 && vars.get('§FS_LED_LAT_DX') == vars.get('§SI')) {
        vars.setCF(vars.get('§POS_PRI_LED') + 1);
    }
    // GENERATED

    return vars.output;
};
