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

export const REG0008472: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008472
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = 'P065'
    // *SET *CON-B = *LUNG
    // #2
    // COND:
    // §FS_ZIP_LAT_RUL = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P065');
    vars.setCON_B(vars.get('§LUNG'));
    
    //#2
    if (vars.get('§FS_ZIP_LAT_RUL') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
