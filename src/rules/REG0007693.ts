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

export const REG0007693: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007693
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §_LIN='FR' ) AND ( §FS_DIM_5=§SI OR §FS_DIM_0G=§SI OR §FS_DIM_6=§SI OR §FS_DIM_6G=§SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('_LIN') == 'FR') && (vars.get('§FS_DIM_5') == vars.get('§SI') || vars.get('§FS_DIM_0G') == vars.get('§SI') || vars.get('§FS_DIM_6') == vars.get('§SI') || vars.get('§FS_DIM_6G') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
