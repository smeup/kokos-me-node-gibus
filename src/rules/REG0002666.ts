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

export const REG0002666: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002666
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TRA_LAT_SX > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §TRA_LAT_SX
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TRA_LAT_SX') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§TRA_LAT_SX'));
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
