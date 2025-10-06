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

export const REG0007458: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007458
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §_LIN<>'DE' AND §_LIN<>'FR' ) AND ( §FS_TOLO_CL=§SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('_LIN') !== 'DE' && vars.get('_LIN') !== 'FR') && vars.get('§FS_TOLO_CL') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
