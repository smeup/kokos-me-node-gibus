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

export const REG0005376: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005376
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // #2
    // COND:
    // *CON-B=#29,8
    // THEN:
    // *SET *CF= [ #0,0596 ]
    // #3
    // COND:
    // *CON-B=#30,8
    // THEN:
    // *SET *CF = [ #0,0616 ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    
    //#2
    if (vars.getCON_B() == 29.8) {
        vars.setCF(0.0596);
    }
    
    //#3
    if (vars.getCON_B() == 30.8) {
        vars.setCF(0.0616);
    }
    // GENERATED

    return vars.output;
};
