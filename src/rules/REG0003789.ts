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

export const REG0003789: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003789
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // *SET *CON-A='0051'
    // #2
    // COND:
    // ( §P_TRA1 > #0 ) AND ( §P_TRA1 <=#600 )
    // THEN:
    // *SET *CON-B=§P_TRA1
    // *SET *CF = #2
    // #3
    // COND:
    // ( §P_TRA1 >#600 )
    // THEN:
    // *SET *CON-B=#600
    // *SET *CF = #2
    // #4
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0051');
    
    //#2
    if ((vars.get('§P_TRA1') > 0) && (vars.get('§P_TRA1') <= 600)) {
        vars.setCON_B(vars.get('§P_TRA1'));
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§P_TRA1') > 600) {
        vars.setCON_B(600);
        vars.setCF(2);
    }
    
    //#4
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
