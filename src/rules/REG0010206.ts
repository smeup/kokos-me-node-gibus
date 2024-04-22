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

export const REG0010206: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010206
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_NO_PRO_TIM = §SI
    // THEN:
    // *SET *CM = §TES_TIM_HID
    // *SET *CF = §CONSUMO_TELO
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_NO_PRO_TIM') == vars.get('§SI')) {
        vars.setCM(vars.get('§TES_TIM_HID'));
        vars.setCF(vars.get('§CONSUMO_TELO'));
    }
    // GENERATED

    return vars.output;
};
