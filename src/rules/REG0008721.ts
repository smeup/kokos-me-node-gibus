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

export const REG0008721: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008721
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §H_SX_SBA_ANT1 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = §H_SX_SBA_ANT1
    // #3
    // COND:
    // §H_AN_SBA_ANT1 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = §H_AN_SBA_ANT1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§H_SX_SBA_ANT1') > 0) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§H_SX_SBA_ANT1'));
    }
    
    //#3
    if (vars.get('§H_AN_SBA_ANT1') > 0) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§H_AN_SBA_ANT1'));
    }
    // GENERATED

    return vars.output;
};
