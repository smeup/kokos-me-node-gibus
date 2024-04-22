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

export const REG0005705: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005705
    // REQUEST:
    // """
    // #1
    // COND:
    // §SPOR > #305
    // THEN:
    // *SET *CF=#1
    // #2
    // COND:
    // §SPOR > #610
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // §SPOR > #910
    // THEN:
    // *SET *CF=#3
    // #4
    // COND:
    // §SPOR > #1205
    // THEN:
    // *SET *CF=#4
    // #5
    // COND:
    // §SPOR > #1510
    // THEN:
    // *SET *CF=#5
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SPOR') > 305) {
        vars.setCF(1);
    }
    
    //#2
    if (vars.get('§SPOR') > 610) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§SPOR') > 910) {
        vars.setCF(3);
    }
    
    //#4
    if (vars.get('§SPOR') > 1205) {
        vars.setCF(4);
    }
    
    //#5
    if (vars.get('§SPOR') > 1510) {
        vars.setCF(5);
    }
    
    // GENERATED

    return vars.output;
};
