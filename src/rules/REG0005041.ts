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

export const REG0005041: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005041
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='0051'
    // *SET *CF=#2
    // #2
    // COND:
    // ( §P_TRA1 > #0 ) AND (§P_TRA1 <=#600 )
    // THEN:
    // *SET *CON-B =§P_TRA1
    // #3
    // COND:
    // ( §P_TRA1 >#600 )
    // THEN:
    // *SET *CON-B = #600
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0051');
    vars.setCF(2);
    
    //#2
    if ((vars.get('§P_TRA1') > 0) && (vars.get('§P_TRA1') <= 600)) {
        vars.setCON_B(vars.get('§P_TRA1'));
    }
    
    //#3
    if (vars.get('§P_TRA1') > 600) {
        vars.setCON_B(600);
    }
    // GENERATED

    return vars.output;
};
