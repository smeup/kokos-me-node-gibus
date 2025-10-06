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

export const REG0008550: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008550
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §STA_MUR_ANT1_DX = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§STA_MUR_ANT1_DX') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#4
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
