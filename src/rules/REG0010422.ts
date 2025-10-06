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

export const REG0010422: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010422
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_CAR_ANG_POS1 = §SI AND §FS_STA_MUR_POS1 = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ANG_PO1_ALA = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_ANG_PO1_AFR = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_CAR_ANG_POS1') == vars.get('§SI') && vars.get('§FS_STA_MUR_POS1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_ANG_PO1_ALA') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#4
    if (vars.get('§FS_ANG_PO1_AFR') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
