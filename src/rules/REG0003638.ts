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

export const REG0003638: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003638
    // REQUEST:
    // """
    // #1
    // COND:
    // §VERN_1_COM='0055'
    // THEN:
    // *SET *CON-A='P055'
    // #2
    // THEN:
    // *SET *CON-A=§VERN_PLAST
    // #3
    // COND:
    // §VERN_1_COM='0053'
    // THEN:
    // *SET *CON-A='P053'
    // #4
    // COND:
    // §VERN_1_COM = '0133' OR §VERN_1_COM = '0320' OR §VERN_1_COM = '0276'
    // THEN:
    // *SET *CON-A = 'P069'
    // #5
    // COND:
    // §VERN_1_COM='0073'
    // THEN:
    // *SET *CON-A='P073'
    // #6
    // COND:
    // §VERN_1_COM='0069'
    // THEN:
    // *SET *CON-A='P069'
    // #7
    // COND:
    // (§VERN_1_COM<>'0055') AND  (§VERN_1_COM<>'0053') AND  (§VERN_1_COM<>'0073') AND  (§VERN_1_COM<>'0069')
    // THEN:
    // *SET *CON-A='P073'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VERN_1_COM') === '0055') {
        vars.setCON_A('P055');
    }
    
    //#2
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#3
    if (vars.get('§VERN_1_COM') === '0053') {
        vars.setCON_A('P053');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') === '0133' || vars.get('§VERN_1_COM') === '0320' || vars.get('§VERN_1_COM') === '0276') {
        vars.setCON_A('P069');
    }
    
    //#5
    if (vars.get('§VERN_1_COM') === '0073') {
        vars.setCON_A('P073');
    }
    
    //#6
    if (vars.get('§VERN_1_COM') === '0069') {
        vars.setCON_A('P069');
    }
    
    //#7
    if (vars.get('§VERN_1_COM') !== '0055' && vars.get('§VERN_1_COM') !== '0053' && vars.get('§VERN_1_COM') !== '0073' && vars.get('§VERN_1_COM') !== '0069') {
        vars.setCON_A('P073');
    }
    // GENERATED

    return vars.output;
};
