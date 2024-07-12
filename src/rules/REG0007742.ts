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

export const REG0007742: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007742
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // #2
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // §INN_TRA_LAT_SX='01'
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // §INN_TRA_LAT_SX='02'
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    vars.setCF(0);
    
    //#3
    if (vars.get('§INN_TRA_LAT_SX') == '01') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§INN_TRA_LAT_SX') == '02') {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
