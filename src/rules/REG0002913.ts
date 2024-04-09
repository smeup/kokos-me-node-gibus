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

export const REG0002913: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002913
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [§LA_BAR_LED_ZER - #3,6]
    // #2
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [§LA_BAR_LED_WAL - #0,7]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§LA_BAR_LED_ZER') - 3.6);
    
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§LA_BAR_LED_WAL') - 0.7);
    // GENERATED

    return vars.output;
};
