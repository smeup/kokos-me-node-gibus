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

export const REG0010516: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010516
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #2
    // *SET *CON-A = 'P000'
    // *SET *CON-B = §VE_GUAR_RIS_LAT
    // #2
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(2);
    vars.setCON_A('P000');
    vars.setCON_B(vars.get('§VE_GUAR_RIS_LAT'));
    
    //#2
    vars.setLG('');
    // GENERATED

    return vars.output;
};
