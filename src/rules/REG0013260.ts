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

export const REG0013260: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013260
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_BRACCI
    // *SET *CON-B = §SPOR_TS
    // #2
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_BRACCI'));
    vars.setCON_B(vars.get('§SPOR_TS'));
    
    //#2
    vars.setCF(1);
    
    //#3
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
