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

export const REG0006081: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006081
    // REQUEST:
    // """
    // #1
    // COND:
    // §VERN_PLAST='P055'
    // THEN:
    // *SET *CON-A='0055'
    // #2
    // COND:
    // §VERN_PLAST='P053'
    // THEN:
    // *SET *CON-A='0053'
    // #3
    // COND:
    // §VERN_PLAST='P073'
    // THEN:
    // *SET *CON-A='0073'
    // #4
    // COND:
    // §VERN_PLAST='P069'
    // THEN:
    // *SET *CON-A='0069'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VERN_PLAST') == 'P055') {
        vars.setCON_A('0055');
    }
    
    //#2
    if (vars.get('§VERN_PLAST') == 'P053') {
        vars.setCON_A('0053');
    }
    
    //#3
    if (vars.get('§VERN_PLAST') == 'P073') {
        vars.setCON_A('0073');
    }
    
    //#4
    if (vars.get('§VERN_PLAST') == 'P069') {
        vars.setCON_A('0069');
    }
    
    // GENERATED

    return vars.output;
};
