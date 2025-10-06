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

export const REG0002002: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002002
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *CF = #1
    // #2
    // COND:
    // §H_COE_FRO = '3'
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §H_COE_FRO = '3,5'
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §H_COE_FRO = '4'
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §H_COE_FRO = '2'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG'));
    vars.setCF(1);
    //#2
    if (vars.get('§H_COE_FRO') == '3') {
        vars.setCF(0);
    }
    //#3
    if (vars.get('§H_COE_FRO') == '3,5') {
        vars.setCF(0);
    }
    //#4
    if (vars.get('§H_COE_FRO') == '4') {
        vars.setCF(0);
    }
    //#5
    if (vars.get('§H_COE_FRO') == '2') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
