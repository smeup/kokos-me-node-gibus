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

export const REG0012205: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012205
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §LARG <= #270
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §LARG <= #270 AND §FS_DOP_MOT = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§LARG') <= 270) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§LARG') <= 270 && vars.get('§FS_DOP_MOT') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
