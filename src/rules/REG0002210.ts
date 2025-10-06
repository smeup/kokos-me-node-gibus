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

export const REG0002210: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002210
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // #2
    // COND:
    // *LUNG = #300
    // THEN:
    // *SET *CON-B = #125
    // #3
    // COND:
    // *LUNG = #325
    // THEN:
    // *SET *CON-B = #137,5
    // #4
    // COND:
    // *LUNG = #350
    // THEN:
    // *SET *CON-B = #150
    // #5
    // COND:
    // *LUNG = #375
    // THEN:
    // *SET *CON-B = #162,5
    // #6
    // COND:
    // *LUNG = #400
    // THEN:
    // *SET *CON-B = #175
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    
    //#2
    if (vars.getLUNG() == 300) {
        vars.setCON_B(125);
    }
    
    //#3
    if (vars.getLUNG() == 325) {
        vars.setCON_B(137.5);
    }
    
    //#4
    if (vars.getLUNG() == 350) {
        vars.setCON_B(150);
    }
    
    //#5
    if (vars.getLUNG() == 375) {
        vars.setCON_B(162.5);
    }
    
    //#6
    if (vars.getLUNG() == 400) {
        vars.setCON_B(175);
    }
    
    // GENERATED

    return vars.output;
};
